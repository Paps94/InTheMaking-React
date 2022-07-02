import React from "react";

const achievementsContent = [
  { title: "195", subTitle1: "Loki and Billie (my cats) added a bug in my code by stepping on the keyboard", subTitle2: "Only to realise during testing.." },
  { title: "53", subTitle1: "I considered turning them into ", subTitle2: "Rugs and coats" },
  { title: "97", subTitle1: "Semi-completed projects ", subTitle2: "Cause I have the attention span of a puppy when it comes to personal projects" },
  { title: "854", subTitle1: "Times I considered giving up.. ", subTitle2: "But didn't!" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
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

export default Achievements;
