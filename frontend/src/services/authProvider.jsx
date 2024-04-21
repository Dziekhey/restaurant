// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
// export const UserContext = createContext({});
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const loginUserAction = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        const data = await response.json();
        toast.error(data.error);
      } else {
        const res = await response.json();
        if (res) {
          setUser(res.user);
          setToken(res.token);
          toast.success("Login was successful");
          navigate("/");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginOwnerAction = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/owners/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        const data = await response.json();
        toast.error(data.error);
      } else {
        const res = await response.json();
        // console.log(res);
        if (res) {
          setUser(res.user);
          setToken(res.token);
          toast.success("Login was successful");
          navigate("/adminprofile/");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    // localStorage.removeItem("site");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, loginOwnerAction, loginUserAction, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
