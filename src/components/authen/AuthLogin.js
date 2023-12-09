import { useRef, useState } from 'react'
import ErrorMessage from './ErrorMessage';
import './auth.css'
import { PLAYER_DATA } from '../PLAYER_DATA';
export default function AuthLogin() {
    const [error, setError] = useState({
        title: null,
        message: null
    });
    const emailLogin = useRef();
    const passwordLogin = useRef();
    const errorMessage = useRef();

    function handleOpenModal() {
        errorMessage.current.open();
    }
    console.log(PLAYER_DATA[1]);

    function handleClickLogin() {
        const email = emailLogin.current.value;
        const password = passwordLogin.current.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.length < 5 || !emailRegex.test(email)) {
            setError({
                title: 'ERROR EMAIL TYPE',
                message: 'Your email is false!'
            })
            handleOpenModal();
        }
        else if (password.length < 8) {
            setError({
                title: 'ERROR PASSWORD',
                message: 'Your password is very short!'
            })
            handleOpenModal();
        } else {
            PLAYER_DATA.map((player) => {
                if (player.email === email && player.password === password && player.player_name !== null) {
                    window.location.href = '/homepage';
                } else if (player.email === email && player.password === password && player.player_name === null) {
                    window.location.href = '/initplayer';
                }
            })
        }

    }
    const errorHandler = () => {
        setError({
            title: null,
            message: null
        }
        );
    }
    console.log(error)
    return (
        <>
            <ErrorMessage ref={errorMessage} errorValue={error} errorHandler={errorHandler} />
            <div id="login">
                <form method="post" className="login__form">
                    <h1 className='login__title'>Login <em>Cow</em> Game</h1>
                    <p className='slogan'>Game is funny, enjoy and learning vocabulary for upgrade yourself !</p>
                    <p className='login__email'>
                        <label htmlFor="email">Email</label>
                        <input ref={emailLogin} id="email" type="email" name="email" required />
                    </p>
                    <p className='login__password'>
                        <label htmlFor="image">Password</label>
                        <input ref={passwordLogin} id="password" type="password" name="password" required />
                    </p>
                    <div className='login__btn'>
                        <a href="/signup">
                            <button className='login__signup' type="button">
                                Sign up
                            </button>
                        </a>
                        <button onClick={handleClickLogin} className="login__signin" type="button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
