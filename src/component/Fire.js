import React, { useContext } from "react";
import { Fireworks, useFireworks } from "fireworks-js/dist/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userAuthContext } from "../Context/UserAuthCotextProvider";
import Loader from "./Loader";
import InstaImage from "../Image/insta_image.png";
import home from "../Image/home.svg";
import Explore from "../Image/explore.svg";
import Plus from "../Image/plus.svg";
import Logout from "../Image/log-out.svg";
import img from "../Image/linus-mimietz-gvptKmonylk-unsplash.jpg";

export default function Fire() {
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

  const { setEnabled, setOptions, enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 15,
        max: 15,
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      boundaries: {
        visible: false,
      },
      sound: {
        enabled: false,
        files: [
          "https://fireworks.js.org/sounds/explosion0.mp3",
          "https://fireworks.js.org/sounds/explosion1.mp3",
          "https://fireworks.js.org/sounds/explosion2.mp3",
        ],
        volume: {
          min: 1,
          max: 2,
        },
      },
      mouse: {
        click: true,
        move: false,
        max: 1,
      },
    },
  });

  const style = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#000",
    backgroundImage: `url(${img})`,

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <Fireworks style={style} enabled={enabled} options={options}>
      <div
        style={{
          textAlign: "center",
          padding: "70px 0",
          fontSize: "2rem",
        }}
      >
        <h1>
          <b>Welcome to the new world</b>
        </h1>
        <div
          className="btn-group-toggle"
          data-toggle="buttons"
          onClick={handleLogout}
          style={{ float: "right", top: "0", right: "0", position: "absolute" }}
        >
          <label class="btn btn-secondary active">Log out</label>
        </div>
      </div>
    </Fireworks>
  );
}
