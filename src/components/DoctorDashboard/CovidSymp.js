import React from 'react';

function CovidSymptomDetails(props) {
  const { symptoms } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Symptom</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {symptoms.map((symptom) => (
            <tr key={symptom.date}>
              <td>{symptom.date}</td>
              <td>{symptom.name}</td>
              <td>{symptom.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CovidSymptomDetails;
