import './Register.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
export const Register = () => {
    return (
        <div className='register'>
            <form className='form'> 
                    <div className='wrapper'>
                    <div className='field'>
                        <p>Username:</p>
                        <input placeholder='Enter your username'></input>
                    </div>
                    <div className='field'>
                        <p>Password:</p>
                        <input placeholder='Enter your Password'></input>
                    </div>
                    <div className='btn'>
                        <button>Register</button>
                        <Link to='/login'><button>Sign In</button></Link>
                    </div>
                    </div>
            </form>
        </div>
    )
}
