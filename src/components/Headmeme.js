import React from 'react'
import MemeGenerator from './MemeGenerator'

function Headmeme() {
    return (
        <div>
            <header>
                <img
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="problem"/>
                <p>Meme generator</p>
                
            </header>
            <MemeGenerator />
        </div>
    )
}
export default Headmeme