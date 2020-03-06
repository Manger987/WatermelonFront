import React, { Component } from 'react';
import axios from 'axios';
// import Out from './Out';
import { withRouter } from 'react-router-dom';

class Character extends React.Component {
    render = (props) => {
        return (
            <div key={this.props.character.key}>
                <div className='col-md-6'>{ this.props.character.name}</div>
                <div className='col-md-5'>{ this.props.character.location.name}</div>
                <img src={`${this.props.character.image}`}/>>
            </div>    
        )
    }
};

class Characters extends React.Component {
    render = (props) => { 
        return (
            <div>
                {
                    this.props.characters.map((character) => 
                        <Character character={character}/>
                    )
                }
            </div>
        );
    }
};

export default Characters;