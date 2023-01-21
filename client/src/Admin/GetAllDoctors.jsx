import React from "react";
import Sidebar from "./Sidebar";

const GetAllDoctors = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <section className="admin-content">
        <h2 className="fw-bolder text-center text-primary">
          List of all Doctors
        </h2>
      </section>
    </div>
  );
};

export default GetAllDoctors;
