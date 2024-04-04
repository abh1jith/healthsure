import React, { useState } from 'react';


const CovidQuestionnaire = () => {
  // State variables to keep track of questionnaire answers
  const [hasCovid, setHasCovid] = useState(false);
  const [hasAdmitted, setHasAdmitted] = useState(false);
  const [hasFever, setHasFever] = useState(false);
  const [hasCough, setHasCough] = useState(false);
  const [hasShortnessOfBreath, setHasShortnessOfBreath] = useState(false);
  const [hasFatigue, setHasFatigue] = useState(false);
  const [hasBodyAches, setHasBodyAches] = useState(false);
  const [hasLossOfTasteOrSmell, setHasLossOfTasteOrSmell] = useState(false);

  // Function to submit questionnaire answers
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Covid:', hasCovid);
    console.log('Admitted:', hasAdmitted);
    console.log('Fever:', hasFever);
    console.log('Cough:', hasCough);
    console.log('Shortness of breath:', hasShortnessOfBreath);
    console.log('Fatigue:', hasFatigue);
    console.log('Body aches:', hasBodyAches);
    console.log('Loss of taste or smell:', hasLossOfTasteOrSmell);
  };


  
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-check">
        <table className="table">
          <tbody>
          <tr>
            <td>
            
        <div className='input-group mb-3'>
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasCovid}
            onChange={() => setHasCovid(!hasCovid)}
            id="fever"
          />
          <label className="form-control" htmlFor="fever">
            Have you been Diagnosed with Covid?
          </label>
          </div>
        </td>
        
        <td>
        <div className='input-group-prepend'>
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasAdmitted}
            onChange={() => setHasAdmitted(!hasAdmitted)}
            id="fever"
          />
          <label className="form-control" htmlFor="fever">
            Have you been admitted to a hospital?
          </label>
        </div>
        </td>
        </tr>
        <tr>
              <td>
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasFever}
            onChange={() => setHasFever(!hasFever)}
            id="fever"
          />
          <label className="form-control" htmlFor="fever">
            Do you have a fever?
          </label>
        
        </td>        
        

        <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasCough}
            onChange={() => setHasCough(!hasCough)}
            id="cough"
          />
          <label className="form-control" htmlFor="cough">
            Do you have a cough?
          </label>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasShortnessOfBreath}
            onChange={() => setHasShortnessOfBreath(!hasShortnessOfBreath)}
            id="shortness-of-breath"
          />
          <label className="form-control" htmlFor="shortness-of-breath">
            Do you have shortness of breath?
          </label>
        </div>
        </td>
        
        <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasFatigue}
            onChange={() => setHasFatigue(!hasFatigue)}
            id="fatigue"
          />
          <label className="form-control" htmlFor="fatigue">
            Do you have fatigue?
          </label>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasBodyAches}
            onChange={() => setHasBodyAches(!hasBodyAches)}
            id="body-aches"
          />
          <label className="form-control" htmlFor="body-aches">
            Do you have body aches?
          </label>
        </div>
        </td>
        <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={hasLossOfTasteOrSmell}
            onChange={() => setHasLossOfTasteOrSmell(!hasLossOfTasteOrSmell)}
            id="loss-of-taste-or-smell"
          />
          <label className="form-control" htmlFor="loss-of-taste-or-smell">
            Have you lost your sense of taste or smell?
          </label>
        </div>
        </td>
        </tr>
        </tbody>
        </table>
        </div>

    
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> 
    </div>
    
  );
};

export default CovidQuestionnaire;
