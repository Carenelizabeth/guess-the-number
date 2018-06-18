import React from 'react';
import UserGuess from './userGuess';
import RecentGuess from './recentGuess'
import GuessHistory from './guessHistory'
import './App.css';

export default class App extends React.Component {
  
  render() {
    return (
      <div className='wrapper'>
        <h1>Hot OR Cold?</h1>
        <UserGuess label='Pick a number between 1 and 100'/>
        <RecentGuess guess='8' />
        <GuessHistory />
      </div>
    );
  }
}


