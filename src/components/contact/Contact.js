import React, {useState} from 'react';
import "./contact.scss";

function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} action="https://formsubmit.co/ahmed0elsayed0saleh@gmail.com" method="POST">
                    <input type="text" placeholder="Name" name="name" required/>
                    <input type="email" placeholder="Email" name="mail" required/>
                    <textarea placeholder="Message" name="comment" required/>
                    <button type="submit" value="send">Send</button>
                    {message && <span>Thank,s I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    );
}

export default Contact;