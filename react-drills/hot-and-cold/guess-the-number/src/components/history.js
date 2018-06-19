import React from 'react'

export default function History(props){

    const history = [10, 50, 12, 75, 82]

    return(
        <div className='guess-history'>
            {history.map((item, index) => <p index={index}>{item}</p>)}
        </div>    
    )

}