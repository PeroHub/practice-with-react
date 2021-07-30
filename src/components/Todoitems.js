import React from 'react'

function Todoitems(props) {
    return (
        <div className="check">
            <input type="checkbox" checked={props.details.completed} onChange={() => props.change(props.details.id)} />
            <h4>{props.details.value}</h4>
        </div>
    )
}

export default Todoitems