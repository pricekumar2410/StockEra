import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom"

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const handleStorage = (e) => {
      if (e.key === "user") {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  // refs for closing dropdown when clicking outside
  const profileRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isProfileDropdownOpen &&
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileDropdownOpen]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((v) => !v);
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsProfileDropdownOpen(false);
    // reload or redirect to landing/login
    window.location.href = "/";
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="images/dashboardLogo.png" style={{ width: "30px" }} />
      <div className="menus" style={{ position: "relative" }}>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                DashBoard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

        </ul>
        <hr />
        <div className="profile" ref={profileRef}>
          <div className="avatar" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            {user ? `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`.toUpperCase() : "ZU"}
          </div>
          <div className="user-info">
            <p className="username">{user ? `${user.firstName} ${user.lastName}` : "User"}</p>
            <p className="user-email" style={{ fontSize: "12px", color: "#666", margin: "2px 0" }}>
              {user ? user.email : "No email"}
            </p>
          </div>
        </div>
        {isProfileDropdownOpen && (
          <div
            ref={dropdownRef}
            className="profile-dropdown"
            style={{
              position: "absolute",
              bottom: "70px",
              left: "12px",
              background: "#fff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              padding: "12px",
              borderRadius: "8px",
              zIndex: 200,
              minWidth: "180px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#2b6cb0", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>
                {user ? `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`.toUpperCase() : "U"}
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>{user ? `${user.firstName} ${user.lastName}` : "User"}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{user ? user.email : ""}</div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "8px 0" }} />
            <button onClick={handleLogout} style={{ width: "100%", padding: "8px 10px", background: "#e53e3e", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
