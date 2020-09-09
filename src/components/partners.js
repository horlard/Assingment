import React from 'react'
import '../partner.css'
import Partners from '../img/partners.png'

export default function partners() {
    return (
        <div className='partner_container'>
            <div className="partner_main">
                <div className="partner_text">
                    <p className="partner_header">Become a Partner and start earning!</p>
                    <p className="partner_paragraph">You can login and logout whenever you want! No mandatory timings!</p>
                    <a href="#" className="partner_btn">Become a Partner</a>
                </div>
                <div className="partner_pictures">
                    <img src={Partners}/>
                </div>
            </div>
        </div>
    )
}
