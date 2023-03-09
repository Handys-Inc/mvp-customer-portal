import React, { useState, useContext, useEffect, createContext } from "react";

import { useCookies } from "react-cookie";
import services from "../services";

export const AuthContext = createContext();

const dataFromLS = JSON.parse(localStorage.getItem("user") || null);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  // Current Authenticated user
  const [currentUser, setCurrentUser] = useState(dataFromLS);

  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // get new details everytime an update is made

  // useeffect to update current user
  useEffect(() => {
    if (cookies.user === undefined && dataFromLS === null) {
      setCurrentUser(null);
      window.open(`${process.env.REACT_APP_MAIN}/login/client`, "_self");
    }
    if (cookies.user && dataFromLS === null) {
      localStorage.setItem("user", JSON.stringify(cookies.user));
    }
  }, []);

  const userUpdate = () => {
    services
      .getSingleUser()
      .then((res) => {
        console.log("user creds", res);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  // deleting/destroying user details upon logout
  const logOut = () => {
    removeCookie("user");
    localStorage.clear();
    window.location.reload();
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        userUpdate,
        currentUser,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
