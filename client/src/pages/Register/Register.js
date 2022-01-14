import './Register.scss'
export const Register = () => {
    return (
        <div className='register'>
            <form className='form'> 
                    <div className='wrapper'>
                    <div className='field'>
                        <p>Username:</p>
                        <input placeholder='Enter your username'></input>
                    </div>
                    <div>
                        <p>Password:</p>
                        <input placeholder='Enter your Password'></input>
                    </div>
                    <div className='btn'>
                        <button>Register</button>
                    </div>
                    </div>
            </form>
        </div>
    )
}
