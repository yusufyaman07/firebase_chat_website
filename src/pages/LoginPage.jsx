import { useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import "../../styles/_login.scss";

const LoginPage = ({ setIsAuth }) => {
  const [name, setName] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then(data => {
      // transfer the user's Login State to State
      setIsAuth(true);
      // Transfer token to localstroage
      localStorage.setItem("TOKEN", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Room</h1>
        <p>Login to continue</p>
        <button onClick={handleClick}>
          <img src="./google_logo.png" alt="google" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
