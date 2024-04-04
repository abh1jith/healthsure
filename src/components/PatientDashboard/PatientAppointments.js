import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import DoctorsList from "./DoctorsList";
import BookAppointment from "./BookAppointment";

const PatientAppointments = () => {
  return (
    <div className="container-fluid p-0">
      <Routes>
        <Route index={true} element={<Navigate to="doctors-list" replace />} />
        <Route path={"doctors-list"} element={<DoctorsList />} />
        <Route path={"book-appointment/:doctorid"} element={<BookAppointment />} />
      </Routes>
    </div>
  );
};

export default PatientAppointments;
