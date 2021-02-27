import React from 'react';
import '../styles/contact.css';

function Contact(){

    function onClick()
    {
        window.location.href = `mailto:contact@greenvariable.com?subject=IT Consulting Request"`;
    }

    return (
             <button onClick={onClick} className='fill'>Connect With Our Team</button>
    )
}

export default Contact