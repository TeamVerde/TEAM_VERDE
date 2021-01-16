import React from 'react'
import Landing from './landing'
import Services from './services'
import '../styles/body.css'

function body() {
    return (
        <div className='content'>
        <Landing/>
        <Services/>
        </div>
    )
}

export default body
