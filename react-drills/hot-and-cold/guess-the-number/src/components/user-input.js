import React from 'react'
import './user-input.css'

export default function UserInput(props){

    return(
        <form className='get-guess'>
            <h2>Choose a Number between 1 and 100</h2>
            <fieldset>
                <input type="number" />
                <button type="submit">Guess</button>
            </fieldset>
        </form>
    )

}