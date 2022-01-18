import './Login.scss'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Context } from '../../authContext/authContext'
import { loginStart, loginSuccess, loginFailure } from '../../authContext/Action'
import axios from 'axios'
export const Login = () => {
    const { isFetching, dispatch } = useContext(Context)
    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart());
        try {
            const res = await axios.post('http://localhost:8800/api/auth/login', {username,password})
            dispatch(loginSuccess(res.data))
            console.log(res.data);
            localStorage.setItem("user",res.data.accessToken)
        }
        catch (err) {
            dispatch(loginFailure())
        }
    }
    return (
        <div className='login'>
            <form className='form'>
                <div className='wrapper'>
                    <div className='field'>
                        <p>Username:</p>
                        <input
                            placeholder='Enter your username'
                            value={username}
                            type='text'
                            name='username'
                            autoComplete="on"
                            onChange={e => setUserName(e.target.value)}
                        ></input>
                    </div>
                    <div className='field'>
                        <p>Password:</p>
                        <input
                            placeholder='Enter your Password'
                            value={password}
                            name='password'
                            type='password'
                            autoComplete="on"
                            onChange={e => setPassWord(e.target.value)}
                        ></input>
                    </div>
                    <div className='btn'>
                        <button onClick={handleLogin} disabled={isFetching}>Login</button>
                        <Link to='/register'><button>Register</button></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
