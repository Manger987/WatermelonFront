import React, { Component } from 'react';
import axios from 'axios';
// import Out from './Out';
import { withRouter } from 'react-router-dom';

class Character extends React.Component {
    render = (props) => {
        return (
            <div className='row' key={this.props.character.key}>
                <div className='col-md-3'>{ this.props.character.name}</div>
                <div className='col-md-2'>{ this.props.character.status}</div>
                <div className='col-md-2'>{ this.props.character.gender}</div>
                <div className='col-md-3'>{ this.props.character.location.name}</div>
                <img className='col-md-2' src={`${this.props.character.image}`}/>
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