import React from 'react'
import GuessFeedback from './feedback'

export default function RecentGuess(props){
    return(
        <div>
            <p> {props.guess} is <GuessFeedback feedback='hot'/> </p>
        </div>
    )
}