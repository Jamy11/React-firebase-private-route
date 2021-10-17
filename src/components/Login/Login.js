import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import {useLocation , useHistory} from 'react-router-dom'

const Login = () => {
    const { signInUsingGoogle} = useAuth()
    const location = useLocation()
    // console.log(location.state?.from.pathname)

    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () =>{
        signInUsingGoogle().then((result)=>{
            history.push(redirect_uri)
        })
    }
    return (
        <div>
            <center>
                <div>
                    <h2>Login</h2>
                    <form action="">
                        <input type="email" placeholder='email' />
                        <br /><br />
                        <input type="password" name="" id="" placeholder='Password' />
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>New to ema-jhon?<Link to='/register'> Create Account</Link></p>
                    <div>-----------Or-------------</div>
                    <button className='btn-regular' onClick={handleGoogleLogin}>Sign in with Google</button>
                </div>
            </center>
        </div>
    )
}

export default Login
