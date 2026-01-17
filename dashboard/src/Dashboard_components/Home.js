import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login if no token
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <GeneralContextProvider>
        <TopBar />
        <Dashboard />
      </GeneralContextProvider>
    </>
  );
};

export default Home;
