import React from "react";

const OtherSkillsCard = (probs) => {

  return (
    <>
      <div className="solution_cards_box">
        <div className="solution_card">
          <div className="hover_color_bubble"></div>
          <div className="so_top_icon">
            <img className="" src={probs.image} alt="" />
          </div>
          <div className="solu_title">
            <h3>{probs.name}</h3>
          </div>
          <div className="solu_description">
            <p>{probs.description}</p>
          </div>
          <a type="button" target="_blank" href={probs.link} rel="noreferrer" className="read_more_btn">Read More</a>
        </div>
      </div>
    </>
  );
};

export default OtherSkillsCard;
