import axios from "axios";
import React from "react";
import Sidebar from "./Sidebar";
import { API, token } from "../network";
import { useEffect } from "react";
import { useState } from "react";

const GetAllUsers = () => {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get(`${API}/api/admin/get-all-users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);
      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    getUsers();
    return () => abortController.abort();
  }, []);
  return (
    <div className="admin-container">
      <Sidebar />
      <section className="admin-content">
        <h2 className="fw-bolder text-center text-primary">
          List of all Users
        </h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-warning">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isDoctor && "Doctor"}
                    {user.isAdmin && "Admin"}
                    {!user.isDoctor && !user.isAdmin && "User"}
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default GetAllUsers;
