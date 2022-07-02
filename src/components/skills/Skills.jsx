import React from "react";

const Skills = (props) => {
  return (
    <>
      <div className="progress_inner">
        <span className="label">{props.name}</span>
        <div className="background">
          <div className="bar">
            <div
              className="bar_in"
              style={{ width: props.skillPercent + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
