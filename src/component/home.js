import React, { Component } from 'react';
import axios from 'axios';
// import Out from './Out';
import { withRouter } from 'react-router-dom';

class Character extends React.Component {
    Character = (props) => {
        return (
            <div>{ props.character}</div>
        );
    }
};

class Home extends React.Component {
    constructor(props){
        super(props);
        this.rickAndMorty = {};
    }

    ListArray = (props) => {
        const results = props.results;
        const listItems = results.map((character) =>
          <Character character={character} />
        );
        return (
          <div>
            {listItems}
          </div>
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
            console.log('RICK:', response);
        })
        .catch(function (error) {
            // handle error
            console.log('RICK:', error);
        });
    };

    render() {
        this.verifyRoute();
        return (
            <div>
                <p>Usted está logueado</p>
                {/* <Out /> */}
            </div>
        );
    }
}

// export default withRouter(Home);
export default Home;