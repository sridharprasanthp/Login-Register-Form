import { useState } from 'react';
import axios from 'axios'
function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsvalid] = useState(true);


    function submitHandler(e) {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            setIsvalid(false);
        }
        else {
            const logindata = {
                name: name,
                email: email,
                password: password
            }
            axios.post('http://localhost:3001/Register', logindata).then(res => alert(res.data));
            setName("")
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div>

            <form onSubmit={submitHandler}>
                <h1>Sign Up</h1>
                <div>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Sample" style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
                <div>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="sample@gmail.com" style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
                <div>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
                <hr style={{maxWidth:"100vw"}}/>
                <input type='submit' value='Sign Up' style={{backgroundColor:"#377df1",color:"white"}}/>
            </form><br />
            <span>Already have account</span> &nbsp;&nbsp; &nbsp;
            <button onClick={props.reverse}>Login</button>
        </div>
    )
};

export default Register;