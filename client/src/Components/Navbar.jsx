import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  var userInfo;
  const logout = () => {
    localStorage.removeItem("userInfo");
    setInterval(() => {
      window.location.href = "/login";
    }, 1000);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light d-flex">
        <div className="container-fluid py-auto ml-auto px-4">
          <Link to="/" className=" navbar-brand main-logo">
            Find Your Doctor
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="hamburger">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav navbar-wrapper mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/doctors">
                  Find Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  About
                </Link>
              </li>
              {userInfo ? (
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className=" dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    role="button"
                  >
                    <img
                      src={userInfo.image}
                      alt={userInfo.name}
                      className="img"
                      style={{ height: 40, width: 40 }}
                    />
                  </Link>
                  <ul
                    className="dropdown-menu profile-drop dropdown-content dropdown-menu-light"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/myprofile">
                        {userInfo.name}
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Signout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link login-button " to="/login">
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
