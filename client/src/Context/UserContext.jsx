import React from "react";
import axios from "axios";
import { createContext, useState } from "react";
import { API } from "../network";
import { useEffect } from "react";
const ContextUser = createContext(null);

const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const myAbortController = new AbortController();
    if (userInfo) {
      const getUserDetails = async () => {
        const res = await axios.get(
          `${API}/api/user/${userInfo && userInfo.data.id}`,
          {
            headers: {
              Authorization: `Bearer ${userInfo && userInfo.data.token}`,
            },
          }
        );
        setUser(res.data.data);
      };
      getUserDetails();
    }

    return () => {
      myAbortController.abort();
    };
  }, []);
  return <ContextUser.Provider value={user}>{children}</ContextUser.Provider>;
};
export default GlobalContext;
export { ContextUser };
