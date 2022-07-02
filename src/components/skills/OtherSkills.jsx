import React from "react";
import OtherSkillsCard from "./OtherSkillsCard";

const OtherSkills = () => {

  const otherSkillsContent = [
    {
      name: "Remix IDE",
      image: "img/otherSkills/remix.png",
      link: "https://remix-project.org/",
      description: "Local development and testing of smart contracts"
    },
    {
      name: "Infura",
      image: "img/otherSkills/infura.png",
      link: "https://infura.io/",
      description: "Node provider to generate local blockchain for testing"
    },
    {
      name: "Alchemy",
      image: "img/otherSkills/alchemy.png",
      link: "https://www.alchemy.com/",
      description: "Node provider to generate local blockchain for testing"
    },
    {
      name: "Ganache",
      image: "img/otherSkills/ganache.png",
      link: "https://trufflesuite.com/docs/ganache/",
      description: "A personal blockchain for rapid Ethereum and Corda distributed application development"
    },
    {
      name: "Truffle",
      image: "img/otherSkills/truffle.png",
      link: "https://trufflesuite.com/docs/truffle/",
      description: "Development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)"
    },
    {
      name: "Mocha",
      image: "img/svg/mocha.svg",
      link: "https://mochajs.org/",
      description: "JavaScript test framework running on Node.js and in the browser"
    }
  ];


  return (
    <>
      <div className="section_our_solution">
        <div className="row">
        {otherSkillsContent.map((val, i) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <OtherSkillsCard name={val.name} image={val.image} link={val.link} description={val.description} />
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default OtherSkills;
