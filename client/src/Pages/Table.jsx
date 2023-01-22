import React from "react";

const Table = ({ appointments }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="table-secondary">
          <tr>
            <th scope="col">Doctor</th>
            <th scope="col">Specialization</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment?.doctorInfo.firstName}</td>
                <td>{appointment?.doctorInfo.specialization}</td>
                <td>{appointment?.date.substring(0, 10)}</td>
                <td>
                  {appointment?.time.substring(14, 19)}{" "}
                  {appointment && appointment.time.substring(14, 16) >= 12
                    ? "PM"
                    : "AM"}
                </td>
                <td>{appointment?.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
