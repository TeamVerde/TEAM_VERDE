import React from 'react'
import '../styles/landing.css'
import Contact from '../components/contact'


function Landing() {

    const handleSubmit = (event) => {
        console.log(`We hurr...
        `);
        
        event.preventDefault();
      }
    
    return (
        <div className='landing'>
            <div className='hero'>
                <h1>Forward Thinking Software</h1>
                <p>Helping businesses understand technology is at the core of what we do.</p>
                <p>Whatever your needs are, we're here.</p>
                <Contact/>
            </div>
        </div>
    )
}

export default Landing
