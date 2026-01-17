import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const [availableQty, setAvailableQty] = useState(0);
    const [estimatedProceeds, setEstimatedProceeds] = useState(0);
    const generalContext = useContext(GeneralContext);

    // Fetch available quantity from holdings
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3002/allHoldings", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            const holding = res.data.find(h => h.name === uid);
            if (holding) {
                setAvailableQty(holding.qty);
                setStockQuantity(1);
                setStockPrice(holding.price);
            }
        }).catch((err) => console.log("Error fetching holdings:", err));
    }, [uid]);

    // Calculate estimated proceeds from sale
    useEffect(() => {
        const proceeds = parseFloat(stockQuantity) * parseFloat(stockPrice);
        setEstimatedProceeds(proceeds);
    }, [stockQuantity, stockPrice]);

    const handleSellClick = () => {
        const token = localStorage.getItem("token");
        
        if (stockQuantity > availableQty) {
            alert(`Cannot sell more than ${availableQty} units available!`);
            return;
        }

        if (stockQuantity <= 0) {
            alert("Quantity must be greater than 0!");
            return;
        }

        axios.post("http://localhost:3002/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "Sell",
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            // Update holdings after successful sell
            axios.post("http://localhost:3002/updateHoldings", {
                name: uid,
                qtyToRemove: stockQuantity,
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(() => {
                alert("Order placed successfully!");
                generalContext.closeSellWindow();
                window.location.reload(); // Refresh to show updated holdings
            }).catch((err) => console.log("Error updating holdings:", err));
        }).catch((err) => console.log("Error placing order:", err));
    };

    const handleCancelClick = () => {
        generalContext.closeSellWindow();
    };

    const handleMaxClick = () => {
        setStockQuantity(availableQty);
    };

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                <div className="available-info">
                    <p>Available Qty: <strong>{availableQty}</strong></p>
                </div>
                <div className="inputs">
                    <fieldset>
                        <legend>Qty. (Available: {availableQty})</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                            max={availableQty}
                        />
                        <button 
                            className="max-btn" 
                            onClick={handleMaxClick}
                            style={{ marginTop: "5px", padding: "5px 10px", fontSize: "12px" }}
                        >
                            Max
                        </button>
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
                <div className="proceeds-info">
                    <span>Estimated Proceeds: ₹{estimatedProceeds.toFixed(2)}</span>
                </div>
                <div>
                    <Link className="btn btn-red" onClick={handleSellClick}>
                        Sell
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;
