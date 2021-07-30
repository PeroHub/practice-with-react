import React from 'react'
import Thank from '../Thank'

function Logout(props) {
    console.log(props)
    return (
        <div>
        <button className="but" onClick={props.value} >Log Out</button>
            <p>log  In</p>

            
        </div>
    )
}


export default Logout