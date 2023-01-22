import React from "react";
import { useContext } from "react";
import { ContextUser } from "../Context/UserContext";

const Profile = () => {
  const user = useContext(ContextUser);
  return (
    <div className="profile-page d-flex p-3">
      <div
        style={{ flex: "2" }}
        className="personal-info d-flex justify-content-center flex-column"
      >
        <h3 style={{ color: "orange" }} className="py-3  fw-bold">
          Personal Information
        </h3>
        <div className="personal-info-content">
          <div className="personal-info-content-item">
            <p className="text-primary fw-bold">Name</p>
            <p className="text-secondary">{user && user.name}</p>
          </div>
          <div className="personal-info-content-item">
            <p className="text-primary fw-bold">Email</p>
            <p className="text-secondary">{user && user.email}</p>
          </div>
          <div className="personal-info-content-item">
            <p className="text-primary fw-bold">Account Created At</p>
            <p className="text-secondary">
              {user && user.createdAt.substring(0, 10)}
            </p>
          </div>
        </div>
      </div>
      <section className="my-appointments" style={{ flex: "3" }}>
        <h3 style={{ color: "orange" }} className=" py-3 text-center  fw-bold">
          My Appointments
        </h3>
      </section>
    </div>
  );
};

export default Profile;
