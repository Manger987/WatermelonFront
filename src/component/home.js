import React, { Component } from 'react';
import axios from 'axios';
// import Out from './Out';
import { withRouter } from 'react-router-dom';

class Character extends React.Component {
    Character = (props) => {
        return (
            <div>{ props.character.name}</div>
        );
    }
};
// class ListArray extends React.Component {
//     Character = (props) => {
//         const results = props.results;
//         console.log('results', props);
//         const listItems = results.map((character) =>
//           <Character character={character} />
//         );
//         return (
//           <div>
//             {listItems}
//           </div>
//         );
//     }
// };

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // rickAndMortyData : {}
        };
    }

    // ListArray = (props) => {
    //     // const results = props.results;
    //     console.log('results', props);
    //     if (this.state.rickAndMortyData) {
    //     const listItems = this.state.rickAndMortyDatafr.map((character) =>
    //       <Character character={character} />
    //     );
    //     return (
    //       <div>
    //         {listItems}
    //       </div>
    //     );}
    //   }
      
      Character = (props) => {
            return (
                <div>{ props.character.name}</div>
            );
        } 

    verifyRoute = () => {
        // console.log('TOKENNN:::',localStorage.getItem('token'));
        console.log('mich:',this.props.location.state.token);
        if (!this.props.location.state.token) {
            return this.props.history.push('/login');
        }
        axios.get('https://rickandmortyapi.com/api/character')
        .then(function (response) {
            // handle success
            console.log('response::',response.data.results);
            return response.data.results;
        }).then(data => {
            console.log('dataaa:',data);
            this.setState({rickAndMortyData: data});
        })
        .catch(function (error) {
            // handle error
            console.log('RICK:', error);
        });
    };

    componentDidMount(){
        this.verifyRoute();
    }

    render() {
        // this.verifyRoute();
        return (
                this.state.rickAndMortyData.map((character) => {
                    // <Character/>
                })
            
        )
    }
}

// export default withRouter(Home);
export default Home;