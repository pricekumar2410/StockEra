import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Style CSS/navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const profileRef = useRef(null);
  const dropdownRef = useRef(null);

  // ✅ Load user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  // ✅ Dashboard redirect
  const handleDashboard = () => {
    const token = localStorage.getItem("token");
    window.location.href = `https://stockera-dashboard.onrender.com/?token=${token}`;
  };

  return (
    <nav className="navbar fixed-top border-bottom" style={{ backgroundColor: "#0F2854" }}>
      <div className="container d-flex align-items-center justify-content-between">

        {/* 🔥 LOGO */}
        <Link className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="media/images/S_Logo.png"
            alt="logo"
            style={{ width: "55px", borderRadius: "4px", background: "#FEFDED" }}
          />
          <h4 style={{ marginLeft: "5px", color: "red" }}>
            <b>Stock</b><span style={{ color: "white" }}>Era</span>
          </h4>
        </Link>

        {/* 🔥 MENU */}
        <ul className="navbar-nav flex-row d-none d-lg-flex gap-4">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/product">Products</Link></li>
          <li><Link className="nav-link" to="/pricing">Pricing</Link></li>
          <li><Link className="nav-link" to="/support">Support</Link></li>

          {!user && <li><Link className="nav-link" to="/signup">Signup</Link></li>}
          {user && <li><button onClick={handleDashboard} className="nav-link">Dashboard</button></li>}
        </ul>

        {/* 🔥 AVATAR (Always visible) */}
        <div style={{ position: "relative" }} ref={profileRef}>
          <div
            onClick={() => setOpen(!open)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#2b6cb0",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {user
              ? `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`.toUpperCase()
              : "U"}
          </div>

          {/* 🔽 DROPDOWN */}
          {open && (
            <div
              ref={dropdownRef}
              style={{
                position: "absolute",
                top: "50px",
                right: "0",
                background: "#0F2854",
                border: "1px solid white",
                borderRadius: "8px",
                padding: "12px",
                minWidth: "200px",
                zIndex: 1000
              }}
            >
              <h5 style={{ color: "red", fontSize: "26px" }}>
                <b>Stock</b><span style={{ color: "white" }}>Era</span>
              </h5>

              <hr style={{ borderTop: "1px solid white" }} />

              {/* USER INFO */}
              <div style={{ color: "white" }}>
                <div style={{ fontSize: "14px", fontWeight: "bold", padding: "6px" }}>
                  {user ? `${user.firstName} ${user.lastName}` : "Guest User"}
                </div>
                <div style={{ fontSize: "14px", padding: "6px" }}>
                  {user ? user.email : "No email"}
                </div>
              </div>

              <hr style={{ borderTop: "1px solid white" }} />

              {/* LOGOUT */}
              {user && (
                <button
                  onClick={handleLogout}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#dc3545",
                    cursor: "pointer"
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;