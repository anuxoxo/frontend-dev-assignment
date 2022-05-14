import React from 'react'
import './FormContainer.scss'
import InputGroup from "../InputGroup/InputGroup"

import { Link } from "react-router-dom";

export default function FormContainer() {
    return (
        <div className="form__container">
            <div className="form__heading">
                <h1>Create an account</h1>
            </div>
            <div>
                <InputGroup
                    type="email"
                    name="email"
                    label="Your email address"
                />
                <InputGroup
                    type="password"
                    name="password"
                    label="Your password"
                />
                <InputGroup
                    type="text"
                    name="fullName"
                    label="Your full name"
                />
                <InputGroup
                    type="tel"
                    name="tel"
                    label="Your phone number"
                />
                <input type="checkbox" name="agreeTerms" id="agreeTerms" defaultChecked />
                <label htmlFor="agreeTerms">I read and agree Terms and Conditions</label>

                <Link to="/graph" className="btn__link">
                    <button className="createAccount__btn">
                        Create Account
                    </button>
                </Link>

            </div>
        </div >
    )
}
