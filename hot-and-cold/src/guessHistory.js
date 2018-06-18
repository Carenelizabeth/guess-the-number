import React from 'react'

export default function GuessHistory(props){
    const pastGuesses = [50, 20, 80, 30, 15]

    return(
        <div className='history'>
            <p>{pastGuesses}</p>
        </div>
    )
}