import React, { useState } from 'react'
import './InputGroup.scss'

export default function InputGroup({ name, type, label }) {
    const [showErr, setShowErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [inputText, setInputText] = useState("");
    const [confirmPwdText, setConfirmPwdText] = useState("");

    const validateEmail = () => {
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputText))) {
            setErrMsg("Please enter valid email address");
            setShowErr(true);
        } else {
            setErrMsg("");
            setShowErr(false);
        }
    }
    const validatePwd = () => {
        if (inputText !== confirmPwdText) {
            setErrMsg("Password did not match")
            setShowErr(true);
        } else {
            setErrMsg("");
            setShowErr(false);
        }
    }
    const validatePhone = () => {
        if (!(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(inputText))) {
            setErrMsg("Please enter valid phone number")
            setShowErr(true);
        } else {
            setErrMsg("");
            setShowErr(false);
        }
    }

    const handleFocusOut = () => {
        if (name === "email") {
            validateEmail();
        } else if (name === "password") {
            validatePwd();
        } else if (name === "tel") {
            validatePhone();
        }
    }
    return (
        <>


            {name === "password" ?
                <>
                    <label htmlFor={type}>{label}</label>
                    <input
                        type={type}
                        name={name}
                        id={name}
                        value={inputText}
                        onChange={(e) => {
                            setInputText(e.target.value)
                        }} />

                    <label htmlFor="confirmPassword">Confirm your password</label>
                    <input
                        type={"password"}
                        name={"confirmPassword"}
                        id={"confirmPassword"}
                        value={confirmPwdText}
                        onBlur={handleFocusOut}
                        onChange={(e) => {
                            setConfirmPwdText(e.target.value)
                        }} />
                </>
                :
                <>
                    <label htmlFor={type}>{label}</label>
                    <input
                        type={type}
                        name={name}
                        id={name}
                        value={inputText}
                        onBlur={handleFocusOut}
                        onChange={(e) => {
                            setInputText(e.target.value)
                        }} />
                </>
            }

            {
                showErr &&
                <p className="error_msg">{errMsg}</p>
            }
        </>
    )
}