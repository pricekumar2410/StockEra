import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const [availableMargin, setAvailableMargin] = useState(0);
  const [usedMargin, setUsedMargin] = useState(0);
  const [availableCash, setAvailableCash] = useState(0);
  const [accounts, setAccounts] = useState([]);

  // Modal states
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showOpenAccountModal, setShowOpenAccountModal] = useState(false);
  const [inputAmount, setInputAmount] = useState("");
  const [accountForm, setAccountForm] = useState({
    accountNumber: "",
    accountType: "Commodity",
    bankName: "",
  });

  // Initialize funds and accounts from localStorage on mount
  useEffect(() => {
    const storedFunds = localStorage.getItem("userFunds");
    if (storedFunds) {
      const funds = JSON.parse(storedFunds);
      setAvailableMargin(funds.availableMargin || 0);
      setUsedMargin(funds.usedMargin || 0);
      setAvailableCash(funds.availableCash || 0);
    }

    const storedAccounts = localStorage.getItem("userAccounts");
    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }
  }, []);

  // Listen for storage changes (when buy/sell happens in another component)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "userFunds") {
        const funds = e.newValue ? JSON.parse(e.newValue) : {};
        setAvailableMargin(funds.availableMargin || 0);
        setUsedMargin(funds.usedMargin || 0);
        setAvailableCash(funds.availableCash || 0);
      }
      if (e.key === "userAccounts") {
        const storedAccounts = e.newValue ? JSON.parse(e.newValue) : [];
        setAccounts(storedAccounts);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleAddFundsSubmit = () => {
    if (inputAmount && !isNaN(inputAmount)) {
      const newAmount = parseFloat(inputAmount);
      const updatedFunds = {
        availableMargin: availableMargin + newAmount,
        usedMargin,
        availableCash: availableCash + newAmount,
      };
      setAvailableMargin(updatedFunds.availableMargin);
      setAvailableCash(updatedFunds.availableCash);
      localStorage.setItem("userFunds", JSON.stringify(updatedFunds));
      alert(`Added ₹${newAmount} to your account!`);
      setInputAmount("");
      setShowAddFundsModal(false);
    }
  };

  const handleWithdrawSubmit = () => {
    if (inputAmount && !isNaN(inputAmount)) {
      const newAmount = parseFloat(inputAmount);
      if (newAmount > availableCash) {
        alert(`Insufficient cash! Available: ₹${availableCash}`);
        return;
      }
      const updatedFunds = {
        availableMargin: availableMargin - newAmount,
        usedMargin,
        availableCash: availableCash - newAmount,
      };
      setAvailableMargin(updatedFunds.availableMargin);
      setAvailableCash(updatedFunds.availableCash);
      localStorage.setItem("userFunds", JSON.stringify(updatedFunds));
      alert(`Withdrawn ₹${newAmount} from your account!`);
      setInputAmount("");
      setShowWithdrawModal(false);
    }
  };

  const handleOpenAccountSubmit = () => {
    if (!accountForm.accountNumber || !accountForm.bankName) {
      alert("Please fill all account details!");
      return;
    }

    const newAccount = {
      id: Date.now(),
      ...accountForm,
      createdAt: new Date().toLocaleDateString(),
    };

    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("userAccounts", JSON.stringify(updatedAccounts));

    alert("Account added successfully!");
    setAccountForm({
      accountNumber: "",
      accountType: "Commodity",
      bankName: "",
    });
    setShowOpenAccountModal(false);
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button className="btn btn-green" onClick={() => setShowAddFundsModal(true)}>Add funds</button>
        <button className="btn btn-blue" onClick={() => setShowWithdrawModal(true)}>Withdraw</button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹{availableMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹{usedMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">₹{availableCash.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>Your Accounts</p>
            <button
              className="btn btn-blue"
              onClick={() => setShowOpenAccountModal(true)}
              style={{ border: "none", cursor: "pointer", marginBottom: "15px" }}
            >
              Add Account
            </button>

            {accounts.length > 0 ? (
              <div style={{ marginTop: "10px" }}>
                {accounts.map((account) => (
                  <div
                    key={account.id}
                    style={{
                      background: "#f5f5f5",
                      padding: "12px",
                      borderRadius: "6px",
                      marginBottom: "10px",
                      border: "1px solid #ddd",
                    }}
                  >
                    <p style={{ margin: "4px 0", fontWeight: 600, fontSize: "14px" }}>
                      {account.bankName}
                    </p>
                    <p style={{ margin: "4px 0", fontSize: "12px", color: "#666" }}>
                      Account: ****{account.accountNumber.slice(-4)}
                    </p>
                    <p style={{ margin: "4px 0", fontSize: "12px", color: "#666" }}>
                      Type: {account.accountType}
                    </p>
                    <p style={{ margin: "4px 0", fontSize: "11px", color: "#999" }}>
                      Added: {account.createdAt}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "12px", color: "#999" }}>No accounts added yet</p>
            )}
          </div>
        </div>
      </div>

      {/* Add Funds Modal */}
      {showAddFundsModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <h2 style={{ marginTop: 0 }}>Add Funds</h2>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Amount (in ₹):
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="Enter amount"
                style={{ marginLeft: "10px", padding: "6px", width: "150px" }}
              />
            </label>
            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <button className="btn btn-green" onClick={handleAddFundsSubmit} style={{ border: "none", cursor: "pointer" }}>
                Add
              </button>
              <button className="btn btn-grey" onClick={() => { setShowAddFundsModal(false); setInputAmount(""); }} style={{ border: "none", cursor: "pointer" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <h2 style={{ marginTop: 0 }}>Withdraw Funds</h2>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Amount (in ₹):
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="Enter amount"
                style={{ marginLeft: "10px", padding: "6px", width: "150px" }}
              />
            </label>
            <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Available: ₹{availableCash.toFixed(2)}</p>
            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <button className="btn btn-blue" onClick={handleWithdrawSubmit} style={{ border: "none", cursor: "pointer" }}>
                Withdraw
              </button>
              <button className="btn btn-grey" onClick={() => { setShowWithdrawModal(false); setInputAmount(""); }} style={{ border: "none", cursor: "pointer" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Open Commodity Account Modal */}
      {showOpenAccountModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <h2 style={{ marginTop: 0 }}>Add Account</h2>

            <label style={{ display: "block", marginBottom: "12px" }}>
              <span style={{ fontWeight: 600, fontSize: "14px" }}>Account Number:</span>
              <input
                type="text"
                value={accountForm.accountNumber}
                onChange={(e) => setAccountForm({ ...accountForm, accountNumber: e.target.value })}
                placeholder="Enter account number"
                style={{ marginTop: "4px", width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </label>

            <label style={{ display: "block", marginBottom: "12px" }}>
              <span style={{ fontWeight: 600, fontSize: "14px" }}>Bank Name:</span>
              <input
                type="text"
                value={accountForm.bankName}
                onChange={(e) => setAccountForm({ ...accountForm, bankName: e.target.value })}
                placeholder="Enter bank name"
                style={{ marginTop: "4px", width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </label>

            <label style={{ display: "block", marginBottom: "15px" }}>
              <span style={{ fontWeight: 600, fontSize: "14px" }}>Account Type:</span>
              <select
                value={accountForm.accountType}
                onChange={(e) => setAccountForm({ ...accountForm, accountType: e.target.value })}
                style={{ marginTop: "4px", width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              >
                <option value="Commodity">Commodity</option>
                <option value="Savings">Savings</option>
                <option value="Trading">Trading</option>
              </select>
            </label>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <button className="btn btn-blue" onClick={handleOpenAccountSubmit} style={{ border: "none", cursor: "pointer" }}>
                Add Account
              </button>
              <button
                className="btn btn-grey"
                onClick={() => {
                  setShowOpenAccountModal(false);
                  setAccountForm({ accountNumber: "", accountType: "Commodity", bankName: "" });
                }}
                style={{ border: "none", cursor: "pointer" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalBoxStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  minWidth: "350px",
};

export default Funds;
