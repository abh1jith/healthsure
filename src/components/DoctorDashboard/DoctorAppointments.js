import React, { useState } from "react";
import axios from "axios";
import Card from "../PatientDashboard/Card";

const API_URL = "http://127.0.0.1:8000/allinone/";

const DoctorAppointments = () => {
  const [selectedDate, setSelectedDate] = useState();

  const handleCreateAppointments = () => {

  }


  return (
    <div className="container-fluid p-0 d-flex flex-column align-items-center">
      <h1 className="my-4">My Appointments</h1>
      <div className="w-50 mb-4">
        <label htmlFor="appointment-date">Appointment Date:</label>
        <input
          type="date"
          id="appointment-date"
          className="form-control"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        ></input>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleCreateAppointments}>
        Create Appointments {selectedDate && " for " + selectedDate}
      </button>
      
    </div>
  );
};

export default DoctorAppointments;
