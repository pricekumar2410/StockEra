import React, { useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    const saveTokenAndFetchUser = async (token) => {
      try {
        localStorage.setItem("token", token);
        // try fetch user details from backend
        const apiBase = process.env.REACT_APP_API_URL || "https://stockera-backend-kosq.onrender.com";
        const res = await axios.get(`${apiBase}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res && res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          // reload without query params so components re-read localStorage
          window.location.href = window.location.pathname;
          return;
        }
      } catch (err) {
        // If fetching user fails, remove token and redirect to login
        console.error("Failed to fetch user after login token:", err.message || err);
        localStorage.removeItem("token");
      }
      window.location.href = "https://stockera-frontend.onrender.com/login";
    };

    if (tokenFromUrl) {
      saveTokenAndFetchUser(tokenFromUrl);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "https://stockera-frontend.onrender.com/login";
    } else {
      // ensure user is present in localStorage; if not, try to fetch
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        (async () => {
          try {
            const apiBase = process.env.REACT_APP_API_URL || "https://stockera-backend-kosq.onrender.com";
            const res = await axios.get(`${apiBase}/api/auth/me`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            if (res && res.data) {
              localStorage.setItem("user", JSON.stringify(res.data));
              // no reload needed; components may need to read though
            }
          } catch (err) {
            console.error("Failed to fetch user with stored token:", err.message || err);
          }
        })();
      }
    }
  }, []);

  return (
    <GeneralContextProvider>
      <TopBar />
      <Dashboard />
    </GeneralContextProvider>
  );
};

export default Home;
