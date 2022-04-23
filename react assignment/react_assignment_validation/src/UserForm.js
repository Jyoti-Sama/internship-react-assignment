import React, { useEffect, useState } from 'react'

function UserForm() {

    //name
    const [name, setName] = useState('');
    const [isNameError, setIsNameError] = useState(false)

    //email
    const [email, setEmail] = useState('');
    const [isEmailError, setIsEmailError] = useState(false)

    //name handlers
    const onBlurNameHandler = () => {
        console.log("name blur");
        if (name === "") setIsNameError(true);
    }
    const onFocusNameHandler = () => {
        console.log("name focused")
        setIsNameError(false)
    };

    //email handlers

    //email validator
    const isValidEmail = value =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
        );

    const onBlurEmailHandler = () => {
        console.log("blur email")
        if (!isValidEmail(email)) {
            setIsEmailError(true)
        }
    }

    const onFocusEmailHandler = () => {
        setIsEmailError(false)
    }


    // form submit section
    const handelSubmit = (e) => {
        e.preventDefault();
        if (name === "") setIsNameError(true);
        if (!isValidEmail(email)) setIsEmailError(true);

        if (name && isValidEmail(email)) {
            console.log(name, email) // if all goes well then form data will show at console
        }
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="name">User Name</label>
                    <input
                        className={isNameError ? "err-input" : "normal-input"}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => onBlurNameHandler()}
                        onFocus={() => onFocusNameHandler()}
                    />
                    <div className='error-show'>
                        {isNameError ? <div>invalid name</div> : null}
                    </div>
                </div>

                <div>
                    <label htmlFor="email">User Email</label>
                    <input
                        className={isEmailError ? "err-input" : "normal-input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => onBlurEmailHandler()}
                        onFocus={() => onFocusEmailHandler()}
                    />
                    <div className='error-show'>
                        {isEmailError ? <div>invalid email</div> : null}
                    </div>
                </div>

                <div>
                    <button type='disable'>submit</button>
                </div>

            </form>
        </div>
    )
}

export default UserForm