import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {

  useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const tokenFromUrl = urlParams.get("token");

  if (tokenFromUrl) {
    localStorage.setItem("token", tokenFromUrl);
  }

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href =
      "https://stockera-frontend.onrender.com/login";
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
