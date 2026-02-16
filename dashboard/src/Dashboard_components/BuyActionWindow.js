import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        const totalCost = parseFloat(stockQuantity) * parseFloat(stockPrice);

        // Check available funds
        const storedFunds = localStorage.getItem("userFunds");
        const funds = storedFunds ? JSON.parse(storedFunds) : {
            availableMargin: 0,
            usedMargin: 0,
            availableCash: 0,
        };

        if (totalCost > funds.availableCash) {
            alert(`Insufficient funds! Required: ₹${totalCost.toFixed(2)}, Available: ₹${funds.availableCash.toFixed(2)}`);
            return;
        }

        const token = localStorage.getItem("token");

        axios.post(`${process.env.REACT_APP_API_URL}/newOrder`, {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "Buy",
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            // Deduct funds after successful buy
            const updatedFunds = {
                availableMargin: funds.availableMargin - totalCost,
                usedMargin: funds.usedMargin + totalCost,
                availableCash: funds.availableCash - totalCost,
            };

            localStorage.setItem("userFunds", JSON.stringify(updatedFunds));
            alert(`Order placed! ₹${totalCost.toFixed(2)} deducted from your funds.`);
            generalContext.closeBuyWindow();
        }).catch((err) => {
            console.log("Error placing order:", err);
            alert("Failed to place order. Try again.");
        });
    };

    const handleCancelClick = () => {
        generalContext.closeBuyWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className="btn btn-blue" onClick={handleBuyClick}>
                        Buy
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;
