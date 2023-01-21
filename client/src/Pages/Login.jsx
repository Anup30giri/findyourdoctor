import { useEffect, useState } from "react";
import { API } from "../network";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [navigate, redirect, userInfo]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${API}/api/user/login`, {
      email: data.email,
      password: data.password,
    });
    if (res.data.success) {
      setSuccess(true);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      window.location.href = "/";
    } else {
      setError(res.data.message);
    }
  };
  return (
    <div className="container login-page py-5 d-flex flex-column align-items-center justify-content-center">
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">Logged In Successfully</div>
      )}
      <h2 className="text-primary">Login</h2>
      <form
        style={{ width: "30%" }}
        onSubmit={handleSubmit}
        className="py-3 d-flex flex-column form-container "
      >
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
          <button className="btn btn-primary mt-2">Login</button>
        </div>
        <p className="my-2 text-center">Don't Have an Account ?</p>
        <Link to="/register" className=" btn btn-primary">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
