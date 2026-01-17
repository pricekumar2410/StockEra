import React, { useState, useContext } from "react";

import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";


import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;


// WatchlistItem Component :-
const WatchListItem = ({ stock }) => {
  // To check what item is selcted corrently 
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ?
            (<KeyboardArrowDown className="down" />) :
            (<KeyboardArrowUp className="down" />)
          }
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
}

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return <span className="actions">
    <span>
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        transitionComponent={Grow}
      >
        <button className="buy" onClick={handleBuyClick}>Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        transitionComponent={Grow}
      >
        <button className="sell" onClick={handleSellClick}>Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (S)"
        placement="top"
        arrow
        transitionComponent={Grow}
      >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip
        title="More"
        placement="top"
        arrow
        transitionComponent={Grow}
      >
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  </span>
}

/*
Uncaught runtime errors:
×
ERROR
_GeneralContext__WEBPACK_IMPORTED_MODULE_3__.default.closeBuyWindow is not a function
TypeError: _GeneralContext__WEBPACK_IMPORTED_MODULE_3__.default.closeBuyWindow is not a function
    at handleCancelClick (http://localhost:3000/static/js/bundle.js:56978:61)
    at handleClick (http://localhost:3000/static/js/bundle.js:49528:18)
    at executeDispatch (http://localhost:3000/static/js/bundle.js:33582:7)
    at runWithFiberInDEV (http://localhost:3000/static/js/bundle.js:24934:68)
    at processDispatchQueue (http://localhost:3000/static/js/bundle.js:33610:31)
    at http://localhost:3000/static/js/bundle.js:33907:7
    at batchedUpdates$1 (http://localhost:3000/static/js/bundle.js:26225:38)
    at dispatchEventForPluginEventSystem (http://localhost:3000/static/js/bundle.js:33686:5)
    at dispatchEvent (http://localhost:3000/static/js/bundle.js:35884:31)
    at dispatchDiscreteEvent (http://localhost:3000/static/js/bundle.js:35866:58)
*/