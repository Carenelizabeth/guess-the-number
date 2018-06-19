import React from 'react';
import './App.css';
import UserInput from './user-input';
import Feedback from './feedback';
import History from './history';

export default class App extends React.Component{


render(){
    return(
        <div className='wrapper'>
            <div className='title'>
                <h1>Choose a Number between 1 and 100</h1>
            </div>
            <div className='body-info'>
                <div className='current-info'>
                    <UserInput />
                    <Feedback guess={40} feedback='HOT' color='red' />
                </div>
                <History />
            </div>
        </div>
    )
}


}