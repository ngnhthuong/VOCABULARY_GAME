import './auth.css'
export default function CreateUser() {
    return (
        <div id="login">
            <form method="post" className="signup__form">
                <h1 className='login__title'>Sign Up <em>Cow</em> Game</h1>
                <p className='slogan'>Game is funny, enjoy and learning vocabulary for upgrade yourself !</p>
                <p className='login__email'>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p className='login__phone'>
                    <label htmlFor="image">Phone Number</label>
                    <input id="phone" type="text" name="text" required />
                </p>
                <p className='login__password'>
                    <label htmlFor="image">Password</label>
                    <input id="password" type="password" name="password" required />
                </p>
                <div className='login__btn'>
                    <a href="/">
                        <button className='login__signup' type="button">
                            Confirm
                        </button>
                    </a>
                </div>
            </form>
        </div>
    )
}