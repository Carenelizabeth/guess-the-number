import React from 'react';
import './userGuess.css';

export default class UserGuess extends React.Component{
    render(){
        return (
            <form>
                <label htmlFor="guess">{this.props.label}</label>
                <input type="number" id="guess"/>
            </form>
        )
    }
}