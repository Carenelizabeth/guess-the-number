import React from 'react'
import './feedback.css'

export default function Feedback(props){

    return(
        <div className='user-feedback'>
            <p>{props.guess}is{props.feedback}</p>
        </div>
    )
}