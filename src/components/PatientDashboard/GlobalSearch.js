// GlobalSearch.js
import React from "react";

const GlobalSearch = ({
  experienceFilter,
  setExperienceFilter,
  specializationFilter,
  setSpecializationFilter,
  searchDoctors,
}) => {
  const handleExperienceChange = (e) => {
    setExperienceFilter(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    setSpecializationFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDoctors();
  };

  return (
    <div className="container-fluid bg-light p-3 d-flex flex-column align-items-center justify-content-center shadow-lg p-3 mb-5 rounded bg-dark">
      <div className="cd-flex align-items-center justify-content-center flex-column gap-4 w-75">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-1"
            type="number"
            placeholder="Experience"
            aria-label="Experience"
            value={experienceFilter}
            onChange={handleExperienceChange}
          />
          <input
            className="form-control me-1"
            type="text"
            placeholder="Specialization"
            aria-label="Specialization"
            value={specializationFilter}
            onChange={handleSpecializationChange}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GlobalSearch;
