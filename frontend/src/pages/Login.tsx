import React from "react";
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {SetAuthProps} from "../interface/AuthProps";

function Login({ setIsAuth }: SetAuthProps) {
  const navigate = useNavigate();

  const googleSign = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', "true");
      setIsAuth(true);
      navigate("/");
    })
  }

  return (
    <div className="loginPage">
      <p>Sign in with Google to continue</p>
      <button onClick={googleSign} className="login-with-google-btn">Sign in</button>
    </div>
  );
}

export default Login;