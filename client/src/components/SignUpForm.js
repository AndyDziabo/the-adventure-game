import React, { useState } from "react";
import Error from "./Error";
import username from "./images/text_userName.png";
import passwordImg from "./images/text_password.png";
import emailImg from "./images/text_email.png";
import passwordConfirm from "./images/text_passwordConfirm.png";
import signUpImg from "./images/text_signUp.png";
// import "./LoginStyle/login.css"

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [toggleError, setToggleError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
        setToggleError(true);
        setTimeout(function(){
          setToggleError(false);
        },2400);
      }
    });
  }

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
         
              <div className="sign-up-username">
                <img src={username} />
              </div>
              <div className="sign-up-username-text">
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            
              <div className="email">
                <img src={emailImg} />
              </div>
              <div className="email-text">
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
            
                <div className="sign-up-password">
                <img src={passwordImg} />
              </div>
              <div className="sign-up-password-text">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                </div>
             
                <div className="sign-up-confirm">
                <img src={passwordConfirm} />
              </div>
              <div className="sign-up-confirm-text">
                <input
                  type="password"
                  id="password_confirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete="current-password"
                />
                </div>
              <div className="sign-up-submit-button">
                <img onClick={handleSubmit} src={signUpImg} />
              </div>
        </form>
        {toggleError ? <Error key={errors} errors={errors} /> : null}
      </div>
    </div>
  );
}

export default SignUpForm;