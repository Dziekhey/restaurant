import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [owner, setOwner] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const loginUserAction = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/users/login`, {
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
          localStorage.setItem("userToken", token);
          localStorage.setItem("userName", user.name);
          localStorage.setItem("userId", user._id);
          localStorage.setItem("userEmail", user.email);
          localStorage.setItem("userTelephone", user.telephone);
          toast.success("Login was successful");
          navigate("/userprofile/");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginOwnerAction = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/owners/login`, {
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
          setOwner(res.owner);
          console.log(res.owner);
          setToken(res.token);
          localStorage.setItem("ownerName", owner.name);
          localStorage.setItem("ownerId", owner._id);
          localStorage.setItem("ownerEmail", owner.email);
          localStorage.setItem("restaurantId", owner.restaurant);
          localStorage.setItem("ownerToken", token);
          toast.success("Login was successful");
          
            !owner.restaurant
              ? navigate("/account/admin/restaurant-form")
              : navigate("/adminprofile/");
          
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    setOwner(null);
    setToken("");
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("ownerId");
    localStorage.removeItem("ownerName");
    localStorage.removeItem("ownerEmail");
    localStorage.removeItem("restaurantId");
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userTelephone");
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
