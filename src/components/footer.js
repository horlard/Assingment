import React from 'react'
import Logo from '../img/Logo.png'
import GooglePlay from '../img/google_play.png'
import Apple from '../img/apple.png'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Youtube from '../img/youtube.png'
import Twitter from '../img/twitter.png'
import '../footer.css'


export default function footer() {
    return (
        <div className='footer_container'>
            <div className="footer_main">
            <div className="help">
                <img src={Logo}/>
                <ul className="list-one">
                    <li className="item-one">Help Center</li>
                    <li className="item-one">English(international)</li>
                </ul>
                <div className="download">
                    <img src={Apple}/>
                    <img src={GooglePlay}/>
                    
                </div>
            </div>
            <div className="about">
                <p className="about_head">About us</p>
                <li className="item-two">My Account</li>
                <li className="item-two">Categories</li>
                <li className="item-two">Cities</li>
                <li className="item-two">Become a Partner</li>
                <li className="item-two">Blog</li>
                <li className="item-two">Careers</li>
            </div>
            <div className="question">
            <p className="question_head">Questions?</p>
                <li className="item-three">Frequently Asked Questions</li>
                <li className="item-three">Contact Us</li>
            </div>
            </div>
            <div className="footer_copyright">
                <p className="copy">© 2020 Appening Infotech Pvt Ltd</p>
                <ul className="list_two">
                    <li className="item-four">Privacy</li>
                    <li className="item-four">Accesibility</li>
                    <li className="item-four">Terms</li>
                </ul>
                <span className="icons">
                    <img src={Instagram}/>
                    <img src={Facebook}/>
                    <img src={Twitter}/>
                    <img src={Youtube}/>
                </span>
            </div>
            
        </div>
    )
}
