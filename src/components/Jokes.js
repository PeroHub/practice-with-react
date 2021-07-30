import React from 'react'

function Jokes (props) {
    

    return (
        <div>
            <h1>Joke of the Day</h1>
            
            <p>Question: {props.list.question}?</p>
            <p>PunchLine: {props.list.punchline}</p>
        </div>
    )
}

export default Jokes