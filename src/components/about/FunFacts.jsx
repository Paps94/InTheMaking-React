import React from "react";
import funFacts from "../../data/funFacts.json";

const FunFacts = () => {
  return (
    <div className="row">
      {funFacts.map((val, i) => (
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3 mb-3" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block text-end fw-bolder">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunFacts;
