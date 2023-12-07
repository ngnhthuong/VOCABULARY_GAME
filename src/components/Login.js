import './login.css'
function Login() {
    return (
        <div id="login">
            <form method="post" className="login__form">
                <h1 className='login__title'>Login <em>Cow</em> Game</h1>
                <p className='slogan'>Game is funny, enjoy and learning vocabulary for upgrade yourself !</p>
                <p className='login__email'>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p className='login__password'>
                    <label htmlFor="image">Password</label>
                    <input id="password" type="password" name="password" required />
                </p>
                <div className='login__btn'>
                    <a href="/signup">
                        <button className='login__signup' type="button">
                            Sign up
                        </button>
                    </a>
                    <a href="">
                        <button className="login__signin" type="button">
                            Login
                        </button>
                    </a>
                </div>
            </form>
        </div>
    )
}
export default Login;