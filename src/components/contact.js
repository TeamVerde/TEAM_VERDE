import React from 'react';

function Contact(){

    function onClick()
    {
        // Great resource on mailto syntax
        // https://css-tricks.com/snippets/html/mailto-links/
        window.location.href = 'mailto:contact@greenvariable.com?subject=IT Consulting Request';
    }

    return (
             <button onClick={onClick} className='fill'>Connect With Our Team</button>
    )
}

export default Contact