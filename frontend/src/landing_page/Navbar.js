import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Style CSS/navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };


  const handleDashboard = () => {
    const token = localStorage.getItem("token");
    // Redirect to dashboard
    window.location.href = `https://stockera-dashboard.onrender.com/?token=${token}`;
  };

  return (
    <nav className="navbar fixed-top border-bottom" style={{ backgroundColor: "#0F2854", color: "#FFFFFF" }}>
      <div className="container d-flex align-items-center">

        {/* LEFT: Logo */}
        <Link className="navbar-brand" to="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src="media/images/S_Logo.png" style={{ width: "60px", borderRadius: "4px" }} />
          <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4px", marginLeft: "4px", color: "red", fontWeight: "30px" }}>Stock<span style={{ color: "white" }}>Era</span></h4>
        </Link>

        {/* CENTER: Menu (Desktop only) */}
        <ul className="navbar-nav flex-row mx-auto d-none d-lg-flex gap-4">
          <li className="nav-item"><Link className="nav-link" to="/"><b>Home</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about"><b>About</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/product"><b>Products</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/pricing"><b>Pricing</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/support"><b>Support</b></Link></li>
          {!user && <li className="nav-item"><Link className="nav-link" aria-current="page" to="/signup"><b>Signup</b></Link></li>}
          {user && <li className="nav-item"><button onClick={handleDashboard} className="nav-link"><b>Dashboard</b></button></li>}

          {/* {user && <li className="nav-item"><button onClick={handleLogout} className="nav-link"><b>Logout</b></button></li>} */}
        </ul>

        {/* RIGHT: Hamburger Dropdown */}
        <div className="dropdown">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="dropdown"
          >
            <span className="navbar-toggler-icon" style={{ fontSize: "80%" }}></span>
          </button>

          {/* Small dropdown box: only StockEra heading, user name, email and logout */}
          <ul className="dropdown-menu dropdown-menu-end mt-2 shadow p-3">
            <h3 style={{ color: "#0F2854", marginBottom: "8px" }}>StockEra</h3>
            <div className="px-2 py-2">
              <div style={{ fontWeight: 700 }}>{user ? `${user.firstName} ${user.lastName}` : "User"}</div>
              <div style={{ fontSize: 12, color: "#666" }}>{user ? user.email : "No email"}</div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "8px 0" }} />
            <li>
              <button onClick={handleLogout} className="dropdown-item" style={{ border: "none", background: "none", cursor: "pointer", color: "#dc3545" }}>
                Logout
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>


  );
}

export default Navbar;