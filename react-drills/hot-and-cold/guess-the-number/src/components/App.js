import React from 'react';
import './App.css';
import UserInput from './user-input';
import Feedback from './feedback';
import History from './history';

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            randomNumber: Math.floor(Math.random()*100),
            lastGuess: null,
            verbalFeedback: null,
            colorFeedback: null,
            guessHistory: []
        }
    }

    handleGuesses(newGuess){
        let rand = this.state.randomNumber;
        let feedback;
        let color;
        if (rand-newGuess >10 || newGuess-rand>10){
            feedback='COLD';
            color='blue';
        }else if (rand-newGuess===0){
            feedback='CORRECT';
            color='green'
        }else{
            feedback='HOT';
            color='red'
        }

        const newArray = this.state.guessHistory.slice();
        newArray.push(newGuess);

        this.setState({
            lastGuess: newGuess,
            verbalFeedback: feedback,
            colorFeedback: color,
            guessHistory: newArray
        })

    }

    render(){
        return(
            <div className='wrapper'>
                <div className='title'>
                    <h1>Choose a Number between 1 and 100</h1>
                </div>
                <div className='body-info'>
                    <div className='current-info'>
                        <UserInput onGuess={(e) => this.handleGuesses(e)}/>
                        <Feedback guess={this.state.lastGuess} feedback={this.state.verbalFeedback} color={this.state.colorFeedback} />
                    </div>
                    <History pastGuess={this.state.guessHistory}/>
                </div>
            </div>
        )
    }


}