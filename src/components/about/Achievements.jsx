import React from "react";

const achievementsContent = [
  { subTitle1: "Alibaba Integration", subTitle2: "Created a REST API integration for Alibaba able to handle thousands of requests per minute." },
  { subTitle1: "Amazon Freight", subTitle2: "Created a light Laravel hub on a tight timeframe for Amazon to integrate them with our custom clearance systems in order for them to be able to send shipments into Canada from the USA" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
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
