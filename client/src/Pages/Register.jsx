import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "../network";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate(redirect, { replace: true });
  //     }
  //   }, [navigate, redirect]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API}/api/user`, {
        email: data.email,
        password: data.password,
        name: data.name,
      });
      setSuccess(true);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      setInterval(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      }
      console.log(error.response);
    }
  };
  return (
    <div className="container login-page py-5 d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-primary">Register</h2>
      {error && <h5 className="text-danger">{error}</h5>}
      <form
        style={{ width: "30%" }}
        onSubmit={handleSubmit}
        className="py-3 d-flex flex-column form-container "
      >
        <div className="name">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Fullname"
            className="form-control"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        <div className="email">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="password mt-1">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="form-control"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div className="action-btn d-flex flex-column">
          <button className="btn btn-primary my-2">Register</button>
        </div>
        <p className=" text-center"> Have an Account ?</p>
        <Link to="/login" className=" mb-1 btn btn-primary">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
