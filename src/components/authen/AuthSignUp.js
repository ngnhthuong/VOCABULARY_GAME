import { useRef, useState } from 'react';
import './auth.css';

export default function SignUp() {

    const [account, setAccount] = useState({
        email: null,
        phone: null,
        password: null
    });

    const [errorSignup, setErrorSignup] = useState({
        email: null,
        phone: null,
        password: null
    });

    const email_signup = useRef();
    const phone_signup = useRef();
    const password_signup = useRef();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function handleChange(event){
        let email = email_signup.target.value;
        let phone = phone_signup.current.value;
        let password = password_signup.current.value;
    }
    
    const handleSignUp = () => {
        let email = email_signup.current.value;
        let phone = phone_signup.current.value;
        let password = password_signup.current.value;
        if ((email.length < 5 || !emailRegex.test(email)) || phone.length < 10 || password.length < 8) {
            if (email.length < 5 || !emailRegex.test(email)) {
                setErrorSignup((value) => ({
                    ...value,
                    email: "Wrong email!"
                }));
            } else {
                setErrorSignup((value) => ({
                    ...value,
                    email: null
                }));
            }
            if (phone.length < 10) {
                setErrorSignup((value) => ({
                    ...value,
                    phone: "Phone weak!"
                }));
            } else {
                setErrorSignup((value) => ({
                    ...value,
                    phone: null
                }));
            }
            if (password.length < 8) {
                setErrorSignup((value) => ({
                    ...value,
                    password: "Password very weak!"
                }));
            } else {
                setErrorSignup((value) => ({
                    ...value,
                    password: null
                }));
            }
        } else if (errorSignup.password === null && errorSignup.phone === null && errorSignup.email === null) {
            window.location.href = '/';
        } else if ((email.length > 5 || emailRegex.test(email)) || phone.length >= 10 || password.length > 8) {
            if (email.length > 5 || emailRegex.test(email)) {
                setErrorSignup((value) => ({
                    ...value,
                    email: null
                }));
            }
            if (phone.length >= 10) {
                setErrorSignup((value) => ({
                    ...value,
                    phone: null
                }));
            }
            if (password.length > 8) {
                setErrorSignup((value) => ({
                    ...value,
                    password: null
                }));
            }
        }
    };
    console.log(errorSignup)
    return (
        <div id="login">
            <form method="post" className="signup__form">
                <h1 className='login__title'>Sign Up <em>Cow</em> Game</h1>
                <p className='slogan'>Game is funny, enjoy and learn vocabulary for self-improvement!</p>
                <div className='login__email'>
                    <label htmlFor="email">Email</label>
                    <input ref={email_signup} id="email" type="email" name="email" required />
                    <p className='error-signup__message'>{errorSignup.email}</p>
                </div>
                <div className='login__phone'>
                    <label htmlFor="phone">Phone Number</label>
                    <input ref={phone_signup} id="phone" type="text" name="phone" required />
                    <p className='error-signup__message'>{errorSignup.phone}</p>
                </div>
                <div className='login__password'>
                    <label htmlFor="password">Password</label>
                    <input ref={password_signup} id="password" type="password" name="password" required />
                    <p className='error-signup__message'>{errorSignup.password}</p>
                </div>
                <div className='login__btn'>
                    <button className='login__signup' type="button" onClick={handleSignUp}>
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    )
}
