import { useState } from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const authProvider = new GoogleAuthProvider();

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleGoogleSignIn = async () => {
    const result = await signInWithPopup(auth, authProvider);
    console.log(result);
  };

  return (
    <div className={`modal ${isModalOpen ? "" : "hide"}`}>
      <div className="login-ui">
        <button
          className="close-modal-btn"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          X
        </button>
        <h3>Please, Log In</h3>
        <div className="btn-container">
          <button className="btn login-btn" onClick={handleGoogleSignIn}>
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
