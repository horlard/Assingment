import React from 'react'
import '../schedule.css'
import Schedule from '../img/schedule.png'
import Two from '../img/two.png'
import Three from '../img/three.png'
import Deliver from '../img/deliver.png'
export default function schedule() {
    return (
        <>
        <div className='schedule_container'>
            <div className="schedule_main">
                <div className="schedule_head">
                    <img src={Two}/>
                    <p>Schedule and Pay</p>
                </div>
                <p>Schedule the delivery at your convenient time and pay digitally</p>
            </div>
            <div className='schedule_img'>
                <img src={Schedule}/>
            </div>
        </div>
        <div className='schedule_container'>
        <div className='schedule_img second'>
                <img src={Deliver}/>
            </div>
            <div className="schedule_main sec">
                <div className="schedule_head">
                    <img src={Three}/>
                    <p>It’s delivered and Rate us</p>
                </div>
                <p>Collect groceries at your doorstep and tell us about our service</p>
            </div>
            
        </div>
        </>
    )
}
