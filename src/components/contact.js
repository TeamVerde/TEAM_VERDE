import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/contact.css';

export default () => (
    <Popup
        trigger={<button className='fill'>Connect With Our Team</button>}
        modal
        nested
    >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>&times;</button>
                <div className="header"> We're happy to help.</div>
                <div className="content">
                    <form>
                        <input name="name" type="text" class="feedback-input" placeholder="Name" />
                        <input name="email" type="text" class="feedback-input" placeholder="Email" />
                        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                        <button className="send" onClick={() => {
                        console.log('modal closed ');
                        close();
                    }}>Submit Your Question </button>
                    </form>
                </div>
            </div>
        )}
    </Popup>
);