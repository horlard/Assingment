import React from 'react'
import Bike from '../img/bike.png'
import LiveCard from '../img/liveCard.png'
import Card from '../img/card.png'
import '../quickSearch.css'

export default function process() {
    return (
        <div className='process_container con'>
            <div className="search_head">
                <p>Why Choose Fresh Grocery</p>
                <h2>Because we are in it together</h2>
            </div>
            <div className="service">
                <div className="portion section">
                    <img src={Card}/>
                    <p className='two'>No Minimum Order</p>
                    <p className='secon'>No order value restrictions, Order for yourself or your group</p>
                </div>
                <div className="portion section">
                    <img src={LiveCard}/>
                    <p className='two'>Live Order Tracking</p>
                    <p className='secon'>Track your order anytime from the store to your doorstep</p>
                </div>
                <div className="portion section">
                    <img src={Bike}/>
                    <p className='two'>24 x 7 delivery</p>
                    <p className='secon'>Order anytime, anywhere. We will get you delivered</p>
                </div>
            </div>
        </div>
    )
}
