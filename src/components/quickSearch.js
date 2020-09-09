import React from 'react'
import '../quickSearch.css'
import BarleyOil from '../img/barleyOil.png'
import Vegetables from '../img/vegetables.png'
import Cream from '../img/cream.png'
import Kitchen from '../img/kitchen.png'
import Beverages from '../img/beverages.png'

export default function quickSearch() {
    return (
        <div className='search_container'>
            <div className="search_head">
                <p>Here’s what you need</p>
                <h2>Quick Searches</h2>
            </div>
            <div className="services">
                <div className="portion">
                    <img src={BarleyOil}/>
                    <p>Grocery & Staples</p>
                </div>
                <div className="portion">
                    <img src={Vegetables} style={{height:'78px'}}/>
                    <p>Vegetables & Fruits</p>
                </div>
                <div className="portion">
                    <img src={Cream}/>
                    <p>Personal Care</p>
                </div>
                <div className="portion">
                    <img src={Kitchen}/>
                    <p>Home & Kitchen</p>
                </div>
                <div className="portion">
                    <img src={Beverages} style={{height:'68px'}}/>
                    <p>Beverages</p>
                </div>
            </div>
            <div className="xplore">
            <a href="#" className="explore">Explore More</a>
            </div>
            
        </div>
    )
}
