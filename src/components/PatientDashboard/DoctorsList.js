import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import Card from "./Card";

import docimg from "./../../images/doc1.jpg";

const API_URL = "http://127.0.0.1:8000/allinone/";

const DoctorsList = () => {
  const [doctorCards, setDoctorCards] = useState();

  useEffect(() => {
    axios.get(API_URL + "doctor-details/").then((response) => {
      // console.log(response);
      setDoctorCards(
        response.data.map((cardData, index) => (
          <Card
            imageSrc={docimg}
            title={"Dr. " + cardData.first_name + " " + cardData.last_name}
            details={cardData.Speciality}
            linkUrl={`/patient/PatientAppointments/book-appointment/${cardData.USER_ID}`}
          />
        ))
      );
    });
  }, []);
  return (
    <div className="container-fluid p-0 w-100 d-flex flex-column align-items-center">
      <h1>Doctors</h1>
      <div className="container-fluid p-0 d-flex">{doctorCards}</div>
    </div>
  );
};

export default DoctorsList;
