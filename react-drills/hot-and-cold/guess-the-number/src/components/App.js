import React from 'react';
import './App.css';
import UserInput from './user-input';
import Feedback from './feedback';
import History from './history';

export default class App extends React.Component{


render(){
    return(
        <div className='wrapper'>
            <UserInput />
            <Feedback guess={40} feedback='HOT' />
            <History />
        </div>
    )
}


}