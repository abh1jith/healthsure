import React from 'react';
import CovidSymptomDetails from './CovidSymp';

function PatientTreatmentHistory() {
  const patientData = {
    name: 'John Doe',
    age: 42,
    covidSymptoms: [
      {
        date: '2022-03-01',
        name: 'Fever',
        severity: 'Mild',
      },
      {
        date: '2022-03-03',
        name: 'Cough',
        severity: 'Severe',
      },
    ],
  };
  

  return (
    <div>
        <div class="card mb-3">
  <div class="card-header">
    <h4>Patient Treatment History</h4>
  </div>
  {/* <h1>Patient Treatment History</h1>
      <p>Name: {patientData.name}</p>
      <p>Age: {patientData.age}</p>
      <CovidSymptomDetails symptoms={patientData.covidSymptoms} />
    </div> */}
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>


    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{patientData.name}</td>
      <td>{patientData.age}</td>
      {/* <td><CovidSymptomDetails symptoms={patientData.covidSymptoms} /></td> */}
      <td><a class="btn btn-primary" href="<CovidSymptomDetails symptoms={patientData.covidSymptoms} />" role="button">Get Symptoms</a></td>
    </tr>

  </tbody>
</table>
  

{/* You can remove this bottom part after making the changes above */}
</div>
      <h1>Patient Treatment History</h1>
      <p>Name: {patientData.name}</p>
      <p>Age: {patientData.age}</p>
      <CovidSymptomDetails symptoms={patientData.covidSymptoms} />
    </div>

  );
}

export default PatientTreatmentHistory;
