import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <center>


                <div>
                    <h2>Register</h2>
                    <form action="">
                        <input type="email" placeholder='email' />
                        <br /><br />
                        <input type="password" name="" id="" placeholder='password' />
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Already on ema-jhon?<Link to='/login'> Have a Account</Link></p>
                </div>
            </center>
        </div>
    )
}

export default Register
