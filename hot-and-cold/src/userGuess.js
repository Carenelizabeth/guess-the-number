import React from 'react';

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