import React from 'react'
import '../works.css'
import Map from '../img/map.png'
import One from '../img/one.png'
import Apple from '../img/apple.png'
import GooglePlay from '../img/google_play.png'


export default function Works() {
    return (
        <div className='works_container'>
            <div className="works_head">
                <p>Get delivered in 3 easy steps</p>
                <h2>Here’s how it works</h2>
            </div>
            <div className="works_main">
                <div className="map_img">
                    <img src={Map}/>
                </div>
                <img src={One}/>
                <span>Request in the app</span>
                <p>Set your delivery location, Choose your groceries from a wide range of 5000+ products.</p>
                <div className="app"><img src={Apple}/>
                <img src={GooglePlay}/></div>
                

            </div>
        </div>
    )
}
