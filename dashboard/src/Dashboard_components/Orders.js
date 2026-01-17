import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3002/allOrders", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => {
        setAllOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching orders:", err);
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="orders"><p>Loading orders...</p></div>;
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const totalValue = (order.qty * order.price).toFixed(2);
              const statusClass = order.mode === "Buy" ? "buy-status" : "sell-status";
              const statusColor = order.mode === "Buy" ? "#4CAF50" : "#ff6b6b";

              return (
                <tr key={index}>
                  <td><strong>{order.name}</strong></td>
                  <td>
                    <span style={{
                      color: statusColor,
                      fontWeight: "bold",
                      padding: "5px 10px",
                      borderRadius: "3px",
                      backgroundColor: order.mode === "Buy" ? "#e8f5e9" : "#ffebee"
                    }}>
                      {order.mode}
                    </span>
                  </td>
                  <td>{order.qty}</td>
                  <td>₹{parseFloat(order.price).toFixed(2)}</td>
                  <td>₹{totalValue}</td>
                  <td><span style={{ color: "#FFA500" }}>Executed</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
