import { useState } from "react";

const Login = () => {
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
        <h3>Please, Log In</h3>
        <div className="btn-container">
          <button className="btn login-btn">Login with google</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
