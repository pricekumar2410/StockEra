import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

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
    <nav className="navbar navbar-light bg-light fixed-top border-bottom">
      <div className="container d-flex align-items-center">

        {/* LEFT: Logo */}
        <Link className="navbar-brand" to="/">
          <img src="media/images/s3.png" style={{ width: "120px" }} />
        </Link>

        {/* CENTER: Menu (Desktop only) */}
        <ul className="navbar-nav flex-row mx-auto d-none d-lg-flex gap-4">
          {user && <li className="nav-item"><button onClick={handleDashboard} className="nav-link"><b>Dashboard</b></button></li>}
          <li className="nav-item"><Link className="nav-link" to="/"><b>Home</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about"><b>About</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/product"><b>Products</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/pricing"><b>Pricing</b></Link></li>
          <li className="nav-item"><Link className="nav-link" to="/support"><b>Support</b></Link></li>
          {!user && <li className="nav-item"><Link className="nav-link" aria-current="page" to="/signup"><b>Signup</b></Link></li>}
          {user && <li className="nav-item"><button onClick={handleLogout} className="nav-link"><b>Logout</b></button></li>}
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
            <h3 style={{ color: "#000080", marginBottom: "8px" }}>StockEra</h3>
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