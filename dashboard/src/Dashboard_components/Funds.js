import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/Funds.css";

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
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedWithdrawAccount, setSelectedWithdrawAccount] = useState("");
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
    if (!selectedAccount) {
      alert("Please select an account!");
      return;
    }

    if (!inputAmount || isNaN(inputAmount)) {
      alert("Please enter a valid amount!");
      return;
    }

    const newAmount = parseFloat(inputAmount);
    const selectedAccData = accounts.find(acc => acc.id === parseInt(selectedAccount));

    if (!selectedAccData) {
      alert("Selected account not found!");
      return;
    }

    const confirmMessage = `Add ₹${newAmount} to your account?\n\nAccount: ${selectedAccData.bankName}\nAccount Number: ****${selectedAccData.accountNumber.slice(-4)}`;

    if (window.confirm(confirmMessage)) {
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
      setSelectedAccount("");
      setShowAddFundsModal(false);
    }
  };

  const handleWithdrawSubmit = () => {
    if (!selectedWithdrawAccount) {
      alert("Please select an account!");
      return;
    }

    if (!inputAmount || isNaN(inputAmount)) {
      alert("Please enter a valid amount!");
      return;
    }

    const newAmount = parseFloat(inputAmount);
    const selectedAccData = accounts.find(acc => acc.id === parseInt(selectedWithdrawAccount));

    if (!selectedAccData) {
      alert("Selected account not found!");
      return;
    }

    if (newAmount > availableCash) {
      alert(`Insufficient cash! Required: ₹${newAmount.toFixed(2)}, Available: ₹${availableCash.toFixed(2)}`);
      return;
    }

    const confirmMessage = `Withdraw ₹${newAmount} to this account?\n\nAccount: ${selectedAccData.bankName}\nAccount Number: ****${selectedAccData.accountNumber.slice(-4)}`;

    if (window.confirm(confirmMessage)) {
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
      setSelectedWithdrawAccount("");
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

  const handleDeleteAccount = (accountId) => {
    const accountToDelete = accounts.find(acc => acc.id === accountId);
    if (!accountToDelete) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete this account?\n\nBank: ${accountToDelete.bankName}\nAccount: ****${accountToDelete.accountNumber.slice(-4)}\n\nThis action cannot be undone.`
    );

    if (confirmDelete) {
      const updatedAccounts = accounts.filter(acc => acc.id !== accountId);
      setAccounts(updatedAccounts);
      localStorage.setItem("userAccounts", JSON.stringify(updatedAccounts));
      alert("Account deleted successfully!");
    }
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button
          className="btn btn-green"
          onClick={() => setShowAddFundsModal(true)}
          disabled={accounts.length === 0}
          title={accounts.length === 0 ? "Add atleast 1 account first" : "Add funds to your account"}
        >
          Add funds
        </button>
        <button
          className="btn btn-blue"
          onClick={() => setShowWithdrawModal(true)}
          disabled={accounts.length === 0}
          title={accounts.length === 0 ? "Add atleast 1 account first" : "Withdraw funds to your account"}
        >
          Withdraw
        </button>
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
            <hr />
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹{usedMargin.toFixed(2)}</p>
            </div>
            <hr />
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
              <div className="accounts-container" style={{ marginTop: "10px" }}>
                {accounts.map((account) => (
                  <div
                    key={account.id}
                    className="account-card"
                    style={{
                      background: "#f5f5f5",
                      padding: "12px",
                      borderRadius: "6px",
                      marginBottom: "10px",
                      border: "1px solid #ddd",
                      position: "relative",
                    }}
                  >
                    <button
                      className="account-menu-btn"
                      onClick={() => {
                        const menuDiv = document.getElementById(`menu-${account.id}`);
                        if (menuDiv) menuDiv.style.display = menuDiv.style.display === "none" ? "block" : "none";
                      }}
                      title="Account options"
                    >
                      ⋯
                    </button>
                    <div
                      id={`menu-${account.id}`}
                      className="account-menu-dropdown"
                      style={{ display: "none" }}
                    >
                      <button
                        className="account-menu-item"
                        onClick={() => {
                          handleDeleteAccount(account.id);
                          document.getElementById(`menu-${account.id}`).style.display = "none";
                        }}
                      >
                        🗑️ Delete Account
                      </button>
                    </div>

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

            <label style={{ display: "block", marginBottom: "12px" }}>
              <span style={{ fontWeight: 600, fontSize: "14px" }}>Select Account:</span>
              <select
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
                style={{ marginTop: "4px", width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              >
                <option value="">-- Choose an account --</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.bankName} (****{account.accountNumber.slice(-4)})
                  </option>
                ))}
              </select>
            </label>

            <label style={{ display: "block", marginBottom: "10px" }}>
              <span style={{ fontWeight: 600, fontSize: "14px" }}>Amount (in ₹):</span>
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="Enter amount"
                style={{ marginTop: "4px", width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </label>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <button className="btn btn-green" onClick={handleAddFundsSubmit} style={{ border: "none", cursor: "pointer" }}>
                Add
              </button>
              <button className="btn btn-grey" onClick={() => { setShowAddFundsModal(false); setInputAmount(""); setSelectedAccount(""); }} style={{ border: "none", cursor: "pointer" }}>
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

            <label style={{ display: "block", marginBottom: "12px" }}>
              <span style={{ fontWeight: 600, fontSize: "14px" }}>Select Account:</span>
              <select
                value={selectedWithdrawAccount}
                onChange={(e) => setSelectedWithdrawAccount(e.target.value)}
                style={{ marginTop: "4px", width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              >
                <option value="">-- Choose an account --</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.bankName} (****{account.accountNumber.slice(-4)})
                  </option>
                ))}
              </select>
            </label>

            <label style={{ display: "block", marginBottom: "10px" }}>
              <span style={{ fontWeight: 600, fontSize: "14px" }}>Amount (in ₹):</span>
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="Enter amount"
                style={{ marginTop: "4px", width: "100%", padding: "8px", boxSizing: "border-box", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </label>

            <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Available: ₹{availableCash.toFixed(2)}</p>
            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <button className="btn btn-blue" onClick={handleWithdrawSubmit} style={{ border: "none", cursor: "pointer" }}>
                Withdraw
              </button>
              <button className="btn btn-grey" onClick={() => { setShowWithdrawModal(false); setInputAmount(""); setSelectedWithdrawAccount(""); }} style={{ border: "none", cursor: "pointer" }}>
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
