import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import PrivateRoute from "./PrivatRoute";
import Signup from "./component/Signup";
import { UserAuthContextProvider } from "./Context/UserAuthCotextProvider";

const App = () => {
  return (
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signUp" element={<Signup />} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
};

export default App;
