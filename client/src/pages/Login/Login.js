import './Login.scss'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Context } from '../../authContext/authContext'
import { loginStart, loginSuccess, loginFailure } from '../../authContext/Action'
import { BsGoogle, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { authentication } from '../../firebase-config'
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth'
import axios from 'axios'
export const Login = () => {

    const { isFetching, dispatch } = useContext(Context)
    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const signInWithGoogle = async (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(authentication, provider)
        const data = res.user
        dispatch(loginStart())
        try{
            const response = await axios.post('http://localhost:8800/api/auth/login/social-media',{username:data.email,password:data.uid})
            dispatch(loginSuccess(response.data))
            console.log(res.data)
            localStorage.setItem("user",response.data.accessToken)
        }
        catch(err){
            dispatch(loginFailure())
        }
    }
    const signInWithFacebook = async (e) => {
        e.preventDefault()
        const provider  = new FacebookAuthProvider();
        const res = await signInWithPopup(authentication ,provider);
        const data = res.user
        dispatch(loginStart())
        try{
            const response = await axios.post('http://localhost:8800/api/auth/login/social-media',{username:data.displayName,password:data.uid})
            dispatch(loginSuccess(response.data))
            console.log(res.data)
            localStorage.setItem("user",response.data.accessToken)
        }
        catch(err){
            dispatch(loginFailure())
        }
        console.log(res);
    }
    const signInWithGithub = async (e) => {
        e.preventDefault()
        const provider = new GithubAuthProvider()
        const res = await signInWithPopup(authentication,provider)
        const data = res.user;
        dispatch(loginStart())
        try{
            const response = await axios.post('http://localhost:8800/api/auth/login/social-media',{username:data.email,password:data.uid})
            dispatch(loginSuccess(response.data))
            console.log(response.data)
            localStorage.setItem("user",response.data.accessToken)
        }catch(err){
            console.log(err);
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart());
        try {
            const res = await axios.post('http://localhost:8800/api/auth/login/google', { username, password })
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
                        <h1>Methods</h1>
                        <div className='facebook btn'>
                            <div className='div-icon'>
                                <FaFacebookF className='icon' />
                            </div>
                            <div className='text' onClick={signInWithFacebook}>Facebook</div>
                        </div>
                        <div className='google btn'>
                            <div className='div-icon'>
                                <BsGoogle className='icon' />
                            </div>
                            <div className='text' onClick={signInWithGoogle}>
                                Google
                            </div>
                        </div>
                        <div className='github btn'>
                            <div className='div-icon'>
                                <BsGithub className='icon' />
                            </div>
                            <div className='text' onClick={signInWithGithub}>Github</div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <form className='form'>
                        <h1>Login</h1>
                        <input
                            type='text'
                            value={username}
                            placeholder='Username'
                            onChange={e => setUserName(e.target.value)}
                            autoComplete='on'
                        ></input>
                        <input
                            type='password'
                            value={password}
                            placeholder='Password'
                            onChange={e => setPassWord(e.target.value)}
                            autoComplete='on'
                        ></input>
                        <button onClick={handleLogin} disabled={isFetching}>Login</button>
                        <div className='move-login'>
                            <i>New to application</i><Link to='/register' className='link'><strong> Sign up now</strong></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
