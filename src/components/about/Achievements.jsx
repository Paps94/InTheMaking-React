import React from "react";
import achievments from "../../data/achievements.json";

const Achievements = () => {
  return (
    <div className="row">
      {achievments.map((val, i) => (
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3 mb-3" key={i}>
          <div className="box-stats with-margin">
            <p className="fw-bolder open-sans-font m-0 position-relative">
              <span className="text-uppercase">{val.subTitle1}</span><span className="d-block fw-light">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
