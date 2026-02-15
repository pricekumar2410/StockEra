import React, { useState } from "react";

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
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
