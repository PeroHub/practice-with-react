import React from 'react'

function Login(props) {
    console.log(props)
    return (
        <div>
            <button className="but" onClick={props.value}>Log In</button>
            <p>Please log out</p>
        </div>
    )
}

export default Login