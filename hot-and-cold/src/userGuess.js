import React from 'react';
import './userGuess.css';

export default class UserGuess extends React.Component{
    
    handleGuess(e){
        e.preventDefault();
        console.log(this.input.value)
        this.props.guessHandler(this.input.value)
        this.input.value=''
    }
    
    render(){
        return (
            <form onSubmit={(e) => this.handleGuess(e)}>
                <label htmlFor="guess">{this.props.label}</label>
                <input type="number" id="guess" ref={(input) => this.input = input}/>
                <input type="submit" value="Guess"/>
            </form>
        )
    }
}