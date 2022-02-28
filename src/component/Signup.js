import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuthContext } from "../Context/UserAuthCotextProvider";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, facebookSignIn, loginWithGoogle } =
    useContext(userAuthContext);
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFullnameChange = (e) => {
    setfullname(e.target.value);
  };
  const handleUnameChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlesignup = async (e) => {
    e.preventDefault();
    setError("");
    signUp(email, fullname, username, password, () => navigate("/"));
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
            <form className="login" style={{ paddingTop: "30px" }}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={email}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name"
                  onChange={handleUnameChange}
                  value={username}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Full Name"
                  onChange={handleFullnameChange}
                  value={fullname}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  value={password}
                  required
                />
              </div>
              <button
                className="button login__submit"
                type="submit"
                disabled={!email || !fullname || !username || !password}
                onClick={handlesignup}
              >
                <span className="button__text">Sign Up</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <div className="sign-up" style={{ paddingBottom: "2rem" }}>
                <span>Already have an account?</span>
                <a href="/">Sign In</a>
              </div>
            </form>

            <div className="social-login" style={{}}>
              <h3>log in via</h3>
              <div className="social-icons">
                <a
                  href="#"
                  className="social-login__icon fab fa-facebook"
                  onClick={handleFacebookSignIn}
                ></a>
                <a
                  href="#"
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

export default Signup;
