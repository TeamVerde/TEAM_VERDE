import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/landing.css'

function Landing() {
    return (
            <div className='landing'>
                <h1>Cutting Edge Cloud Native Websites and Apps</h1>
                <p>Bring your business into the cloud.</p>
                <p>Fast. Scalable. Affordable.</p>
                <Link to="#"><button>Connect with our team</button></Link>
            </div>
    )
}

export default Landing
