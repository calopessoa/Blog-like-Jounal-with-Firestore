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
      <p className='login-text'>Sign in with Google to continue, then create your fist post!</p>
      <button onClick={googleSign} className="login-with-google-btn">Sign in</button>
    </div>
  );
}

export default Login;