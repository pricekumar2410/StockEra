import React, { useEffect, useState } from "react";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const context = React.useContext(GeneralContext);
  const user = context.user;
  const userName = user ? `${user.firstName} ${user.lastName}` : "User";

  return (
    <>
      <div className="username">
        <h6>Hi, {userName}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{(context.marginAvailable / 1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>{(context.openingBalance / 1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({context.allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={context.pnl >= 0 ? "profit" : "loss"}>
              {(context.pnl / 1000).toFixed(2)}k <small>{context.pnlPercentage.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{(context.currentValue / 1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Investment <span>{(context.totalInvestment / 1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
