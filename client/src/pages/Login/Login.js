import './Login.scss'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Context } from '../../authContext/authContext'
import { loginStart, loginSuccess, loginFailure } from '../../authContext/Action'
import { BsGoogle, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import axios from 'axios'
export const Login = () => {

    const { isFetching, dispatch } = useContext(Context)
    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart());
        try {
            const res = await axios.post('http://localhost:8800/api/auth/login', { username, password })
            dispatch(loginSuccess(res.data))
            console.log(res.data);
            localStorage.setItem("user", res.data.accessToken)
        }
        catch (err) {
            dispatch(loginFailure())
        }
    }
    return (
        <div className='login'>
            <div className='wrapper'>

                <div className='left'>
                    <div className='loginButtons'>
                        <div className='facebook btn'>
                            <div className='div-icon'>
                                <FaFacebookF className='icon' />
                            </div>
                            <div className='text'>Facebook</div>
                        </div>
                        <div className='google btn'>
                            <div className='div-icon'>
                                <BsGoogle className='icon' />
                            </div>
                            <div className='text'>Google</div>
                        </div>
                        <div className='github btn'>
                            <div className='div-icon'>
                                <BsGithub className='icon' />
                            </div>
                            <div className='text'>Github</div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='form'>
                        <h1>Login</h1>
                        <input
                            type='text'
                            value={username}
                            placeholder='Username'
                            onChange={e => setUserName(e.target.value)}
                        ></input>
                        <input
                            type='password'
                            value={password}
                            placeholder='Password'
                            onChange={e => setPassWord(e.target.value)}
                        ></input>
                        <button onClick={handleLogin} disabled={isFetching}>Login</button>
                        <div className='move-login'>
                            <i>New to application</i><Link to='/register' className='link'><strong> Sign up now</strong></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
