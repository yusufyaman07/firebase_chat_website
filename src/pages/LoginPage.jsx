import { useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import "../../styles/_login.scss";

const LoginPage = ({ setIsAuth }) => {
  const [name, setName] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then(data => {
      // kullanıcının Giriş Durumunu State e aktar
      setIsAuth(true);
      // Token'ı localstroage a aktar
      localStorage.setItem("TOKEN", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Room</h1>
        <p>Devam Etmek için giriş yapınız</p>
        <button onClick={handleClick}>
          <img src="./google_logo.png" alt="google" />
          <span>Google ile giriş</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
