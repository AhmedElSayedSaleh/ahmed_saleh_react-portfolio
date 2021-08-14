import React from 'react';
import {Person, Mail} from "@material-ui/icons";
import Logo from '../../assets/portfolio2.png';

import "./topbar.scss"

function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src={Logo} alt="portfolio"/>
                    </a>
                    <div className="icon-container">
                        <Person className="icon"/>
                        <span>
                            <a href="tel:+201069738000">+20 106 973 8000</a>
                        </span>
                    </div>
                    <div className="icon-container">
                        <Mail className="icon"/>
                        <span>
                            <a href="mailto: ahmed0elsayed0saleh@gmail.com">dev.ahmedsaleh7@gmail.com</a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="burger-icon" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"/>
                        <span className="line2"/>
                        <span className="line3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;