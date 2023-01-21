import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar py-5 d-flex flex-column">
      <Link
        to="/admin/dashboard"
        className="sidebar-item text-white d-flex align-items-center"
      >
        <p>
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </p>
      </Link>
      <Link
        to="/admin/get-all-users"
        className="sidebar-item text-white d-flex align-items-center"
      >
        <p>
          <i className="fas fa-user"></i>
          <span>Users</span>
        </p>
      </Link>
      <Link
        to="/admin/get-all-doctors"
        className="sidebar-item text-white d-flex align-items-center"
      >
        <p>
          <i className="fas fa-user-md"></i>
          <span>Doctors</span>
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
