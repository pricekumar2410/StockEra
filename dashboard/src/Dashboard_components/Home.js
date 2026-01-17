import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <h2>Please login first</h2>;
  }


  return (
    <GeneralContextProvider>
      <TopBar />
      <Dashboard />
    </GeneralContextProvider>
  );
};

export default Home;
