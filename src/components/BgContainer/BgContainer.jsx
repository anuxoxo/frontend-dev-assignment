import React from 'react'
import './BgContainer.scss'
import bg from '../../images/bg.png';

export default function BgContainer() {
    return (
        <div className="bg_container">
            <div className="img_container">
                <img src={bg} alt="bg" />
            </div>
            <div className="text_container">
                <h2>Choose a date range</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, error. Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}
