import React from 'react'
import './FormContainer.scss'
import InputGroup from "../InputGroup/InputGroup"

export default function FormContainer() {
    return (
        <div className="form_container">
            <div className="form_heading">
                <h1>Create an account</h1>
            </div>
            <form>
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

                <button className="create_account_btn">
                    Create Account
                </button>

            </form>
        </div >
    )
}
