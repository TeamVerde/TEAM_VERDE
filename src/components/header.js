import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/GVLogo.svg'
import '../styles/header.css'

function header() {
    return (
        <header>
            <div>
            <img src={logo} alt='Green Variable Logo'/>
            </div>
        </header>
    )
}

export default header
