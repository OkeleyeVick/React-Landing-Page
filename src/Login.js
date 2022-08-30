import { useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return ( 
        <div className="container">
            <div className="aside__left">
                <div className="top"><h2>FoodXpress</h2></div>
                <div className="body"><h1>Where you get served the best &#128523;</h1></div>
            </div>
            <div className="aside__right">
                <div className="top"><p>Don't have an account ?<Link to="/register">Sign up</Link> </p></div>
                <form>
                    <div className="form__header">
                        <h2>Login</h2>
                    </div>
                    <div className="input">
                        <input type="email" 
                        value={email}
                        placeholder='Enter email address'
                        onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <input 
                        type="password" 
                        value={password}
                        placeholder='Enter email address'
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="button"><button type="submit">Login</button></div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;