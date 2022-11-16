import React, { useState } from "react";
import username from "./images/text_userName.png";
import passwordImg from "./images/text_password.png";
import loginImg from "./images/text_login.png";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [toggleError, setToggleError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
        setToggleError(true);
        setTimeout(function(){
          setToggleError(false);
        }, 2400);
      }
    });
  }


  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
            
              <div className="username">
                <img src={username} />
              </div>
              <div className="username-text">
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
                
              <div className="password">
                <img src={passwordImg} />
              </div>
              <div className="password-text">
                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-button" onClick={handleSubmit}>
                <img src={loginImg} />
              </div>
                
          
        </form>
        {toggleError ? 
          <div className="error-container">
            <div>{errors}</div>
          </div>
        :
        null
        }
      </div>
    </div>
  );
}

export default LoginForm;