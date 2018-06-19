import React from 'react'
import './user-input.css'

export default class UserInput extends React.Component{

    handleSubmit(e){
        e.preventDefault();
        console.log(this.input.value);
        this.props.onGuess(this.input.value);
        this.input.value = '';
    }

    render(){
        return(
            <form className='get-guess' onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="number" ref={(input) => this.input = input}/>
                    <button type="submit">Guess</button>
            </form>
        )
    }

}