import { useState } from "react";
import { useGlobalContext } from "../GlobalContext";

const Login = () => {
  const { user, handleGoogleSignIn, handleLogout } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(true);

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
