import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userAuthContext } from "../Context/UserAuthCotextProvider";
import Loader from "./Loader";
import InstaImage from "../Image/insta_image.png";
import home from "../Image/home.svg";
import Explore from "../Image/explore.svg";
import Plus from "../Image/plus.svg";
import Logout from "../Image/log-out.svg";

const Navbar = () => {
  const { logOut, user } = useContext(userAuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <nav>
      <NavLink to={`/home`}>
        <img src={InstaImage} className="log" />
      </NavLink>
      <div>
        <input type="text" className="input_header" placeholder="Search" />
      </div>
      <ul className="header_list">
        <NavLink to={`/home`} className="hide_home">
          <li>
            <img src={home} />
          </li>
        </NavLink>
        <NavLink to={`/explore/posts`}>
          <li>
            <img src={Explore} className="display_explore" />
          </li>
        </NavLink>
        <li>
          <img src={Plus} style={{ cursor: "pointer" }} />
        </li>

        <li>
          <img src={Logout} onClick={handleLogout} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
