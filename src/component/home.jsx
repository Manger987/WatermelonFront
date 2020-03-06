import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
// import Out from './Out';
import { withRouter } from 'react-router-dom';
import Character from './characters';

class Home extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            rickAndMortyData : []
        };

        this.verifyRoute = this.verifyRoute.bind(this);
    }
    
    changeState = (data) => {
        console.log('yapoo', data);
        this.setState({
            rickAndMortyData: data
        });
    }

    verifyRoute = async () => {
        console.log('mich:',this.props.location.state.token);
        if (!this.props.location.state.token) {
            return this.props.history.push('/login');
        }
        const resukt = await axios.get('https://rickandmortyapi.com/api/character');
        console.log('resu',resukt.data.results);
        this.setState({rickAndMortyData: resukt.data.results});
    };

    componentDidMount(){
        this.verifyRoute();
    }

    // componentWillMount(){
    //     console.log('willmount');
    //     this.verifyRoute();
    // }

    render() {
        // this.verifyRoute();
        return (
            <div>
                { 
                    this.state.rickAndMortyData ? <Character characters={this.state.rickAndMortyData} /> : ''
                }
            </div>
        )
    }
}

// export default withRouter(Home);
export default Home;