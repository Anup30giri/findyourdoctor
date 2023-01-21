import React from "react";
import "./index.scss";
const Home = () => {
  return (
    <div className="home d-flex">
      <section className="slogan">
        <h2 className="slogan-title">
          Find <span className="best">Best Clinic</span> <br />
          To Get Solutions.
        </h2>
        <p className="slogan-description">
          Health is one of the most important things for us therefore <br />
          immediately check your health for your well-being.
        </p>{" "}
        <button className="appointment-btn">Appointment</button>
      </section>
      <section className="doctor-img">
        <img src="/images/doctor.png" alt="doctor" />
      </section>
    </div>
  );
};

export default Home;
