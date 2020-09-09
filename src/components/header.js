import React from 'react'
import Logo from '../img/Logo.png'
import location from '../img/location.png'
import gps from '../img/gps.png'
import '../header.css';

export default function header() {
    return (
        <div className='header_container'>
            <div className="header_auth">
                <img src={Logo}/>
                <div className="register">
                    <a href="#" className="in">Log in</a>
                    <a href="#" className="up">Sign up</a>
                </div>
            </div>
            <div className="header_text">
                <h2 className="big">
                Stay Home - We’ll Deliver
                </h2>
                <p className="small">Get your groceries delivered in less than an hour</p>
            </div>
            <div className="form">
                <div className="contain">
                <div className="input">
                    <img src={location}/>
                    <input type="text" placeholder='Search Destination'/>
                </div>
                <div className="search">
                    <img src={gps}/>
                    <a href="#" className="btn">Search</a>
                </div>
                </div>
                
            </div>
            <ul className="list">
                <li className="item">NEW YORK</li>
                <li className="item">LOS ANGELES</li>
                <li className="item">CHICAGO</li>
                <li className="item">HOUSTON</li>
                <li className="item">PHOENIX</li>
                <li className="item">PHILADELPHIA</li>
                <li className="item">SAN ANTONIO</li>
            </ul>
        </div>
    )
}
