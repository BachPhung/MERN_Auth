import './Login.scss'
import {Link} from 'react-router-dom'
export const Login = () => {
    return (
        <div className='login'>
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
                        <button>Login</button>
                        <Link to='/register'><button>Register</button></Link>
                    </div>
                    </div>
            </form>
        </div>
    )
}
