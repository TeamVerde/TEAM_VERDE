import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/services.css'


function Services() {
    return (
            <div className='services section-left'>
                <div className='section-left-content'>
                    <div className='services-text'>
                        <h1>Cutting Edge Cloud Native Websites and Apps</h1>
                        <p>Bring your business into the cloud.</p>
                        <p>Fast. Scalable. Affordable.</p>
                        <Link to="#"><button className='outline'>Connect with our team</button></Link>
                    </div>
                </div>
            </div>
    )
}

export default Services
