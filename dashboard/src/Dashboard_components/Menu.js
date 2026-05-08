import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const context = React.useContext(GeneralContext);
  const user = context.user;

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
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const homeHandleclick = () => {
    window.location.href = `https://stockera-frontend.onrender.com/`;
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    if (context.setUser) context.setUser(null);
    setIsProfileDropdownOpen(false);
    window.location.href = "/";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="images/dashboardLogo.png" style={{ width: "30px" }} alt="logo" />

      <div className="menus" style={{ position: "relative" }}>
        <ul>
          <li>
            <Link to="/" onClick={homeHandleclick} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Home</p>
            </Link>
          </li>

          <li>
            <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          {/* <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li> */}

          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* ✅ PROFILE (Only Avatar visible) */}
        <div className="profile" ref={profileRef}>
          <div
            className="avatar"
            onClick={handleProfileClick}
            style={{ cursor: "pointer", marginRight: "3em", marginLeft: "1rem" }}
          >
            {user
              ? `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`.toUpperCase()
              : "ZU"}
          </div>
        </div>

        {/* ✅ DROPDOWN */}
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
            <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#2b6cb0",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {user
                  ? `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`.toUpperCase()
                  : "U"}
              </div>

              <div>
                <div style={{ fontWeight: 700 }}>
                  {user ? `${user.firstName} ${user.lastName}` : "User"}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {user ? user.email : ""}
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #eee" }} />

            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "8px",
                background: "#e53e3e",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;