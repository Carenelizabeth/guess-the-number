import React from 'react'
import './user-input.css'

export default function UserInput(props){

    return(
        <form className='get-guess'>
                <input type="number" />
                <button type="submit">Guess</button>
        </form>
    )

}