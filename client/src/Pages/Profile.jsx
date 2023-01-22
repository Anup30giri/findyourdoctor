import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextUser } from "../Context/UserContext";
import DoctorTable from "../Doctor/DoctorTable";
import { API, ID, token } from "../network";
import Table from "./Table";

const Profile = () => {
  const [appointments, setAppointments] = useState([]);
  const user = useContext(ContextUser);
  const getAppointments = () => {
    axios
      .post(
        `${API}/api/appointment/userId`,
        { ID },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setAppointments(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="profile-page row gx-0 p-3">
      <div
        className="personal-info d-flex justify-content-around flex-column col-md-4"
        style={{ border: "1px dashed #D2CDF2" }}
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
      <section
        className="my-appointments col-md-8"
        style={{ border: "1px dashed #D2CDF2" }}
      >
        <h3 style={{ color: "orange" }} className=" py-3 text-center  fw-bold">
          My Appointments
        </h3>
        {user && user.isDoctor ? (
          <>
            <DoctorTable />
          </>
        ) : (
          <>
            <Table appointments={appointments} />
          </>
        )}
      </section>
    </div>
  );
};

export default Profile;
