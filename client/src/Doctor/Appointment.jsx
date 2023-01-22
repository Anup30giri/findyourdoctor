import React from "react";

const Appointment = () => {
  return (
    <div className="appointment py-4 container">
      <h4 className="text-primary  text-center fw-bold">Appointment</h4>
      <h3 className="text-primary text-dark text-center fw-bolder">
        Book an Appointment
      </h3>
      <form className="form py-3">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter your date"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
