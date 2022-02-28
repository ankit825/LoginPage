import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAuthContext } from "../Context/UserAuthCotextProvider";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import "../App.css";
import { Alert } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, facebookSignIn, loginWithGoogle } =
    useContext(userAuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleGoogleLogin = async (e) => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="button login__submit"
                type="submit"
                disabled={!email || !password}
                onClick={handleLogin}
              >
                <span className="button__text">Log In</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <div className="sign-up">
                <span>Don't have an account?</span>
                <a href="/Signup">Sign up</a>
              </div>
            </form>

            <div className="social-login">
              <h3>log in via</h3>

              <div className="social-icons">
                <a
                  className="social-login__icon fab fa-facebook"
                  onClick={handleFacebookSignIn}
                ></a>
                <a
                  className="social-login__icon fab fa-google"
                  onClick={handleGoogleLogin}
                ></a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
