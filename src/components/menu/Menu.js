import React from 'react';
import {Facebook, LinkedIn, GitHub, Person, Mail} from "@material-ui/icons"

import "./menu.scss";

function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="contact-icons">
                <a href="https://www.facebook.com/balck.eyes.73" target="_blank" rel="noreferrer" className="icon">
                    <Facebook/>
                </a>
                <a href="https://www.linkedin.com/in/ahmed-el-sayed-saleh" target="_blank" rel="noreferrer"
                   className="icon">
                    <LinkedIn/>
                </a>
                <a href="https://github.com/AhmedElSayedSaleh" target="_blank" rel="noreferrer" className="icon">
                    <GitHub/>
                </a>
            </div>

            <div className="contact-details">
                <div className="icon-container">
                    <Mail className="icon"/>
                    <span>
                            <a href="mailto: ahmed0elsayed0saleh@gmail.com">dev.ahmedsaleh7@gmail.com</a>
                        </span>
                </div>
                <div className="icon-container">
                    <Person className="icon"/>
                    <span>
                            <a href="tel:+201069738000">+20 106 973 8000</a>
                        </span>
                </div>
            </div>
        </div>
    );
}

export default Menu;