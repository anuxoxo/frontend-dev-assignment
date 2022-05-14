import React from 'react'
import './BgContainer.scss'
import bg from '../../images/bg.png';

export default function BgContainer() {
    return (
        <div className="bg">
            <div className="img__container">
                <img src={bg} alt="bg" />
            </div>
            <div className="text__container">
                <h2>Choose a date range</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, error. Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}
