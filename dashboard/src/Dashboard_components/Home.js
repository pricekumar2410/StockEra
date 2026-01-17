import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to FRONTEND login page
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
