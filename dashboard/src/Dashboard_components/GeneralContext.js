import React, { useState, useEffect } from "react";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from './SellActionWindow'

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => { },
  closeBuyWindow: () => { },
  openSellWindow: (uid) => { },
  closeSellWindow: () => { },
  allHoldings: [],
  totalInvestment: 0.0,
  currentValue: 0.0,
  pnl: 0.0,
  pnlPercentage: 0.0,
  marginAvailable: 0.0,
  openingBalance: 0.0,
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [allHoldings, setAllHoldings] = useState([]);
  const [totalInvestment, setTotalInvestment] = useState(0.0);
  const [currentValue, setCurrentValue] = useState(0.0);
  const [pnl, setPnl] = useState(0.0);
  const [pnlPercentage, setPnlPercentage] = useState(0.0);
  const [marginAvailable, setMarginAvailable] = useState(0.0);
  const [openingBalance, setOpeningBalance] = useState(0.0);
  const [user, setUser] = useState(null);

  const fetchUser = async (token) => {
    if (!token) return null;
    try {
      const apiBase = process.env.REACT_APP_API_URL || "https://stockera-backend-kosq.onrender.com";
      const res = await axios.get(`${apiBase}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res && res.data) {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      }
    } catch (err) {
      console.error("fetchUser error:", err?.message || err);
      setUser(null);
      localStorage.removeItem("user");
    }
    return null;
  };

  const calculateHoldingsMetrics = (holdings) => {
    const totalInv = holdings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
    const currVal = holdings.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
    const pnlValue = currVal - totalInv;
    const pnlPercent = totalInv > 0 ? ((pnlValue / totalInv) * 100) : 0;

    setTotalInvestment(totalInv);
    setCurrentValue(currVal);
    setPnl(pnlValue);
    setPnlPercentage(pnlPercent);
  };

  const updateFundsMetrics = () => {
    const storedFunds = localStorage.getItem("userFunds");
    if (storedFunds) {
      const funds = JSON.parse(storedFunds);
      setMarginAvailable(funds.availableMargin || 0.0);
      setOpeningBalance(funds.availableCash || 0.0);
    } else {
      setMarginAvailable(0.0);
      setOpeningBalance(0.0);
    }
  };

  React.useEffect(() => {
    updateFundsMetrics();
    const handleStorageChange = (e) => {
      if (e.key === "userFunds") {
        updateFundsMetrics();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    // On provider mount, if there's a token but no user, try to fetch user
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try { setUser(JSON.parse(storedUser)); } catch { setUser(null); }
    } else if (token) {
      fetchUser(token);
    }

    const handleStorage = (e) => {
      if (e.key === "user") {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
      if (e.key === "token") {
        // token changed elsewhere; try to refresh user
        const newToken = e.newValue;
        if (newToken) fetchUser(newToken);
        else setUser(null);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        allHoldings,
        setAllHoldings,
        totalInvestment,
        currentValue,
        pnl,
        pnlPercentage,
        calculateHoldingsMetrics,
        marginAvailable,
        openingBalance,
        updateFundsMetrics,
        user,
        setUser,
        fetchUser,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
