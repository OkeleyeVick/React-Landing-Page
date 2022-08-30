import { useState } from 'react';
import { Link } from 'react-router-dom'

const RegisterForm = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPass, setConfirmPass] = useState(null)
    // const [isPending, setIsPending] = (false)

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form className='register__div' onSubmit={handleSubmit}>
            <div className="each__div">
                <h1>Sign up</h1>
            </div>
            <div className='each__div'>
                <input
                type="text" 
                value={email}
                placeholder='Enter email address'
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='each__div'>
                <input
                type="password" 
                value={password}
                placeholder='Enter password'
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='each__div'>
                <input
                type="password" 
                value={confirmPass}
                placeholder='Confirm password'
                onChange={e => setConfirmPass(e.target.value)}/>
            </div>
            <div className='each__div button'>
                <button>REGISTER</button>
            </div>
            <div className="extra">
                <small>Have an account already? <Link to="/">Login</Link></small>
            </div>
        </form>
    )
}

export default RegisterForm