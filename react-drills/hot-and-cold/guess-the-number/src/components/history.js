import React from 'react'
import './history.css'

export default function History(props){

    const history = [10, 50, 12, 75, 82]

    return(
        <div className='guess-history'>
            <h2>History</h2>
            <div className='past-answers'>
                {history.map((item, index) => <p index={index}>{item}</p>)}
            </div>
        </div>    
    )

}