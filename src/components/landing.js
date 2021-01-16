import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as BGCurve} from '../assets/bg-curve.svg';
import '../styles/landing.css'


function Landing() {
    return (
            <div className='landing section-right'>
                <BGCurve/>
                <div className='section-right-content hero-wrapper'>
                    <div className='hero-text'>
                        <h1>Cutting Edge Cloud Native Websites and Apps</h1>
                        <p>Bring your business into the cloud.</p>
                        <p>Fast. Scalable. Affordable.</p>
                        <Link to="#"><button className='fill'>Connect with our team</button></Link>
                    </div>
                </div>
            </div>
    )
}

export default Landing
