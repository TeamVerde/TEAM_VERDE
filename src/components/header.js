import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/GVLogoEEE.svg'
import '../styles/header.css'

function header() {
    return (
        <header>
            <div>
            <img src={logo} alt='Green Variable Logo'/>
            </div>
            <div>
            <Link to="#">Link</Link>
            <Link to="#">Link</Link>
            <Link to="#">Link</Link>
            </div>
        </header>
    )
}

export default header
