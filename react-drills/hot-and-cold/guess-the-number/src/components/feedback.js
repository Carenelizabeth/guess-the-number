import React from 'react'
import './feedback.css'

export default function Feedback(props){

    return(
        <div className='user-feedback'>
            <p><span className='recent-guess'>{props.guess}</span> is <span className={props.color}>{props.feedback}</span></p>
        </div>
    )
}