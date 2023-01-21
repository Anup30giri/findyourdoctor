import React from "react";
import Sidebar from "./Sidebar";
import "./index.scss";
import { useContext } from "react";
import { ContextUser } from "../Context/UserContext";

const Dashboard = () => {
  const user = useContext(ContextUser);
  return (
    <div className="admin-container">
      <Sidebar />
      <section className="admin-content">
        <h2 className="fw-bolder text-center text-primary">
          Hello {user && user.name}{" "}
        </h2>
      </section>
    </div>
  );
};

export default Dashboard;
