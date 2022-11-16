import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./LoginStyle/login.css"
import signUp from "./images/text_signUp.png";
import login from "./images/text_login.png";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      
      {showLogin ? 
        <div className="main-login">
          <h1>Login</h1>
          <div>
            <LoginForm onLogin={onLogin} />
          </div>
          <div className="login-message">
            <h3>Don't have an account?</h3>
          </div>
          <div className="sign-up-button" onClick={() => setShowLogin(false)}>
            <img src={signUp} />
          </div>
        </div>
      : 
        <div  className="main-sign-up">
          <h1>Signup</h1>
          <div>
            <SignUpForm onLogin={onLogin} />
          </div>
          <div className="sign-up-message">
            <h3>Already have an account?</h3>
          </div>
          <div className="sign-up-switch-button" onClick={() => setShowLogin(true)}>
            <img src={login} />
          </div>
            
          
        </div>
      }
    </div>
  )
}

export default Login;