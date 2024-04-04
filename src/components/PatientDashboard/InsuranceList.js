import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

import docimg from "./../../images/doc1.jpg";

const API_URL = "http://127.0.0.1:8000/allinone/";

const InsuranceList = () => {
    const [insuranceCards, setInsuranceCards] = useState();

    useEffect(() => {
        axios.get(API_URL + "insurance-plans-details/").then((response) => {
          console.log(response);
          setInsuranceCards(
            response.data.map((cardData, index) => (
              <Card
                imageSrc={docimg}
                title={cardData.first_name + " " + cardData.last_name}
                details={cardData.Speciality}
                // linkUrl={}
              />
            ))
          );
        });
      }, []);
  return (
    <div className="container-fluid p-0 w-100 d-flex flex-column align-items-center">
    <h1>Insurances</h1>
      <div className="container-fluid p-0 d-flex">{insuranceCards}</div>
    </div>
  )
}

export default InsuranceList