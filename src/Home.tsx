import React, { ChangeEvent, useState } from 'react';
import './css/Home.css';

import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const [loginValue, setLoginValue] = useState("");
    const handleloginValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginValue(event.target.value);
    };

    const [passwordValue, setPasswordValue] = useState("");
    const handlepasswordValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    };
    
    const handleClick = () => {
        if (loginValue != "" && passwordValue != "")
            navigate('/Practice');
    }

    return(
        <div className="HomePage">
            <div className="entrance">
                <div className="enterBox">
                    <div className="login">Login</div>
                    <div> 
                        <input
                            className = "loginInput"
                            type="text"
                            placeholder=""
                            value={loginValue}
                            onChange={handleloginValueChange}
                        />
                    </div>
                    <div className="password">Password</div>
                    <div> 
                        <input
                            className = "passwordInput"
                            type="text"
                            placeholder=""
                            value={passwordValue}
                            onChange={handlepasswordValueChange}
                        />
                    </div>
                    <button className="buttonEntrance" onClick={handleClick}>Log in</button>
                </div>
            </div>
        </div>
    );
}

export { Home };