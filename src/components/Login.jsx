import { useState } from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const authProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, authProvider);
      setUser(result.user);
      console.log("Logged in successfully: ", result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User logged out successfully");
    } catch (error) {
      console.log(error);
    }
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
        <h3>Firebase Auth options</h3>
        {!user ? (
          <>
            <p>Please, Log In</p>
            <div className="btn-container">
              <button className="btn login-btn" onClick={handleGoogleSignIn}>
                Login with google
              </button>
            </div>
          </>
        ) : (
          <>
            <p>Welcome, {user.displayName}</p>
            <div className="btn-container">
              <button className="btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Login;
