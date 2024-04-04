import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Card from "./Card";
import GlobalSearch from "./GlobalSearch";
import CovidQuestionnaire from "./CovidQue.js";

const PatientHome = () => {
  const [doctors, setDoctors] = useState([]);
  const [experienceFilter, setExperienceFilter] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleYesButtonClick = () => {
    setShowForm(true);
  };

  const searchDoctors = useCallback(async () => {
    const queryParams = new URLSearchParams();

    if (experienceFilter) {
      queryParams.append("Experience", experienceFilter);
    }

    if (specializationFilter) {
      queryParams.append("Specialization", specializationFilter);
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/allinone/search/?${queryParams.toString()}`
      );
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  }, [experienceFilter, specializationFilter]);

  useEffect(() => {
    searchDoctors();
  }, [searchDoctors]);

  const getImageSrc = (imagePath) => {
    return imagePath + ".jpg";
  };

  return (
    <div className="container-fluid w-100 p-4 d-flex flex-column">
      <div className="card mb-4 shadow-lg rounded text-center" style={{ paddingBottom: "20px" }}>
        <div className="card-body">
          <center>
            <h4>Do you want to answer a COVID Questionnaire?</h4>

            <button onClick={handleYesButtonClick} className="btn btn-primary" style={{ marginBottom: "10px" }}>
              Yes
            </button>
          </center>
          <div className="card-body" style={{ paddingTop: "0" }}>
            {showForm && (
              <div>
                <CovidQuestionnaire />
              </div>
            )}
          </div>
        </div>
      </div>
      <GlobalSearch
        experienceFilter={experienceFilter}
        setExperienceFilter={setExperienceFilter}
        specializationFilter={specializationFilter}
        setSpecializationFilter={setSpecializationFilter}
        searchDoctors={searchDoctors}
      />
      <h1 className="m-auto pb-4">Doctor's Names</h1>
      <div className="d-flex justify-content-start flex-wrap">
        {doctors.map((doctor) => (
          <Card
            key={doctor.Doctor_ID}
            imageSrc={getImageSrc(doctor.Image_Path)}
            title={`${doctor.First_Name} ${doctor.Last_Name}`}
            details={`Specialist in ${doctor.Specialization}, ${doctor.Experience} years of experience`}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientHome;
