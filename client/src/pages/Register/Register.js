import './Register.scss'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'
export const Register = () => {
    const history = useHistory()
    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const [status, setStatus] = useState(false)
    const [submit, setSubmited] = useState(false)
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8800/api/auth/register', { username, password })
            setSubmited(true)
            setUserName('')
            setPassWord('')
            setStatus(true)
            setTimeout(() => history.push('/login'), 1500)
        }
        catch (err) {
            setSubmited(true)
            setStatus(false)
        }
    }
    return (
        <div className='register'>
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
                        <button onClick={handleRegister}>Register</button>
                        {status
                            ? <div className={submit ? 'show' : ''} >Register Sucess<AiOutlineCheck /></div>
                            : <div className={submit ? 'show' : ''}>Register Fail <VscError /></div>
                        }
                        <Link to='/login'><button>Sign In</button></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
