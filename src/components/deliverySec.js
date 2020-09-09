import React from 'react';
import DeliveryBoy from '../img/deliveryBoy.png'
import Tick from '../img/Tick.png'
import '../deliverySec.css';

export default function deliverySec() {
    return (
        <div className='delivery_container'>
            <div className="delivery_main">
                <div className="delivery_text">
                    <p className="hashtag">#GroceryDeliveredSafely</p>
                    <h2 className="delivery_head">Hygenically Packed,Safely Delivered</h2>
                    <a href="#" className="deliverybtn">Learn More</a>
                </div>
                <div className="deliveryBoy">
                    <img src={DeliveryBoy}/>
                </div>
                
            </div>
            <div className="qualities">
                <div className="text">
                    <img src={Tick}/>
                    <p>Zero touch delivery options</p>
                </div>
                <div className="text">
                    <img src={Tick}/>
                    <p>Regular cleaning of warehouses</p>
                </div>
                <div className="text">
                    <img src={Tick}/>
                    <p>Fever screening of all executives</p>
                </div>
            </div>
        </div>
    )
}
