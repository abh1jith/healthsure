import React from "react";

const Card = ({ imageSrc, title, details }) => {
  return (
    <div className="container mb-5" style={{ width: "22rem" }}>
      <div className="card h-100 rounded">
        <img
          src={imageSrc}
          height="300px"
          width="50px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {details.split("\n").map((line, index) => {
              return (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              );
            })}
          </p>
          <div className="height-10 container d-flex justify-content-center align-items-center">
            <div className="mt-1 d-flex justify-content-between align-items-center">
              <h5
                style={{
                  fontWeight: "300",
                  fontSize: "18px",
                  marginBottom: "2px",
                }}
              >
                Reviews
              </h5>

              <div>
                <i
                  className="fa fa-star"
                  style={{ color: "#fbc634", fontSize: "16px" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "#fbc634", fontSize: "16px" }}
                ></i>
                <i
                  className="fa fa-star"
                  style={{ color: "#fbc634", fontSize: "16px" }}
                ></i>
                <i
                  style={{ color: "#cecece" }}
                  className="fa fa-star"
                ></i>
                <i
                  style={{ color: "#cecece" }}
                  className="fa fa-star"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
