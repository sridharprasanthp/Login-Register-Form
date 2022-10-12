import { useState } from 'react';
import axios from 'axios'

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsvalid] = useState(true);

    function submitHandler(e) {
        e.preventDefault();

        if (email.length === 0 || password.length === 0) {
            setIsvalid(false);
        }
        else {
            const logindata = {
                email: email,
                password: password
            }
            axios.post('http://localhost:3001/Login', logindata).then(res => alert(res.data));
            setEmail("");
            setPassword("")
        }
    }
    return (
        <div>

            <form onSubmit={submitHandler}>
                <h1>Login</h1>
                <div>
                    <input type="email" contextMenu='return false' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Address" style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
                <div>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
            <hr/>
                <input type='submit' value='Login' style={{backgroundColor:"#377df1",color:"white"}} />
            </form>
            <br />
            <span>Create Account</span> &nbsp;  &nbsp; &nbsp;
            <button onClick={props.change}>Next</button>
        </div>
    )
}
export default Login;