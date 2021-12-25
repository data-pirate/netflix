import React from 'react'
import './right.css'

function Right(props) {
    return (
        <div  className={`right ${props.loggedIn ? "logged-in" : ""}`}>
            
        </div>
    )
}

export default Right
