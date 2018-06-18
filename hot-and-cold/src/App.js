import React from 'react';
import UserGuess from './userGuess';
import RecentGuess from './recentGuess'
import GuessHistory from './guessHistory'
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      randomNumber: Math.floor(Math.random()*100),
      verbalFeedback: null,
      lastGuess: null,
      previousGuesses: []
    }
  }

  makeGuess(guessedNumber){
    const newGuesses = this.state.previousGuesses.slice();
    newGuesses.push(guessedNumber)
    let feedback
    if(this.state.randomNumber - guessedNumber >10){
      feedback = 'cold'
    }else {feedback = 'hot'}



    this.setState({
      lastGuess: guessedNumber,
      previousGuesses: newGuesses,
      verbalFeedback: feedback
    })
  }

  render() {
    console.log(this.state)

    return (
      <div className='wrapper'>
        <h1>Hot OR Cold?</h1>
        <UserGuess label='Pick a number between 1 and 100' guessHandler={num => this.makeGuess(num)}/>
        <RecentGuess guess={this.state.lastGuess} feedback={this.state.verbalFeedback} />
        <GuessHistory previousGuesses={this.state.previousGuesses}/>
      </div>
    );
  }
}


