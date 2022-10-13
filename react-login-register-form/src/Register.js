import { useState } from 'react';
import axios from 'axios'
function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsvalid] = useState(true);
    const [state, setState] = useState([])


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
            axios.post('http://localhost:3001/Register', logindata).then(res => setState(res.data));
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
                    <input type="text"
                        value={name}
                        onChange={(e) => {
                            if (name.length > 0) {
                                setIsvalid(true)
                            }
                            setName(e.target.value)
                        }}
                        placeholder="Sample"
                        style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => {
                            if (email.length > 0) {
                                setIsvalid(true)
                            }
                            setEmail(e.target.value)
                        }}
                        placeholder="sample@gmail.com"
                        style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
                <div>
                    <input type="password"
                        value={password}
                        onChange={(e) => {
                            if (password.length > 0) {
                                setIsvalid(true)
                            }
                            setPassword(e.target.value)
                        }}
                        placeholder="Password"
                        style={{ borderColor: isValid ? "#ffff" : "#ff0000" }} />
                </div>
                <div>
                    <h5 style={{ color: "red", fontSize: "1em" }}>{state}</h5>
                </div>
                <input type='submit'
                    value='Sign Up'
                    style={{ backgroundColor: "#377df1", color: "white" }} />
            </form><br />
            <span>Already have account</span> &nbsp;&nbsp; &nbsp;
            <button onClick={props.reverse}
                style={{ backgroundColor: "#377df1", color: "white" }}>Login</button>
        </div>
    )
};

export default Register;