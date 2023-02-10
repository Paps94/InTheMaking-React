import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Service = () => {

  const projects = [
    {
      name: "Custom Password Generator",
      icon: "key",
      gitLink: "https://github.com/Paps94/Custom-Password-Generator",
      animation: "zoom-in",
      description: "My first attempt at creating a password generating class in an attempt to get more into the core basics of authentication in general!",
      tools: {
        PHP: "Pure PHP for the class creation",
      },
    },
    {
      name: "Arbitrage Trading Bot",
      title: "Logic & Breakdown",
      description: "This bot does NOT attempt to read the future and predict fluctuations in the price of cryptocurrencies (ERC20) aka Ethereum based. \n ERC20 tokens are created and hosted on the Ethereum blockchain, whereas bitcoin is the native currency of its respective blockchain. ERC20 tokens are stored and sent using Ethereum addresses and transactions, and use gas to cover transaction fees. \nThe key word is 'Arbitrage', by definition arbitrage is the simultaneous buying and selling of securities, currency, or commodities in different markets or in derivative forms in order to take advantage of differing prices for the same asset. - Google Dictionary. \nYou are using the small differences in cryptocurrency prices in different decentralised exchanges to attempt to make profit. For example if an ERC20 token is sold $100 on Exchange 1 and for $102 on Exchange 2 you will buy an ERC20 token from Exchange #1 and sell in Exchange #2 making a profit of almost $2 (almost because of fees). This is the high level idea of it. \nAdditionally this bot will also connect to a Flash Loan provider. A flash loan allows you to take out an unguaranteed loan with the obligation to repay the loan in the same transaction. If it's determined that you can't repay the loan, the loan is reversed as if it never occurred",
      tools: {
        Remix: "Writing Smart Contract",
        Javascript: "React",
        Web3: "Blockchain Interaction",
        Truffle: "Development Framework",
        Ganache: "For Local Blockchain",
        Alchemy: "For forking the Ethereum mainnet",
      },
      icon: "robot",
      gitLink: "https://github.com/Paps94/Web3-Arbitrage-Trading-Bot",
      animation: "fade-left"
    },
    {
      name: "Lottery Replica",
      icon: "lottery",
      gitLink: "https://github.com/Paps94/Web3-Lottery",
      description: "My very first Web3 project coded solely on remix with no font end just me playing with Solidity and basic fundamental smart contract functionality such as modifiers, accepting and sending money.\n On my latest commits it was also updated to reflect the latest solidity version (0.8.9) and also added a very basic front end to it. \n Do keep in mind that if you want to run the front-end project (in the 'React' folder) you first need to follow the first readme instructions in order to deploy the Lottery smart contract and only then you can successfully run the front-end project!",
      animation: "slide-right",
      tools: {
        Remix: "Smart contract development and testing",
        Web3JS: "Blockchain Interaction",
        MetaMask: "Ethereum Wallet",
        Mocha: "Testing smart contract(s)",
        Javascript: "React (Front-end)",
      },
    },
    {
      name: "Minimal Kickstarter Clone",
      description: "An attempt to clone my favourite past time activity, which is funding projects I don't need on Kickstarted. \n Of course the point was not an exact replica but a toned down version to see how a blockchain could handle such an idea. \n You have a factory class that is responsible for creating each project and can also retrive deployed campaigns (aka projects) and within each project you can find some basic functionality such as pledging to a project and a category (different categories have different rewards), the campaign creator (aka the contract owner) can also create a request such as spending x amount of money to y trader for materials example, he/she can create more pledge categories and cancel the campaign. Pledgers can vote on the owners requests ffor spending their pledge money etc",
      tools: {
        Remix: "Local smart contract development",
        Mocha: "Testing smart contract(s)",
        Javascript: "Setting up of deployment and compiling scripts + React for project setup",
      },
      icon: "kickstarter",
      gitLink: "https://github.com/Paps94/Web3-Kickstarter-Clone",
      animation: "fade-down"
    },
    {
      name: "NFT - Generation and Minting",
      icon: "nft",
      gitLink: "https://github.com/Paps94/Web3-NFT-Generation-and-Minting",
      animation: "fade-right",
      description: "An attempt at what a NFT generating and minting contract would look like. You have the ability for a customizable NFT generation (3rd party MIT script) which gives the contract creator the ability to fully customize the rarity of NFTs and so on. \n I wanted to get an idea of what is like to generate and mint NFTs not because I think their current state is important in the Web3 ecosystem or because they can make me rich but because a friend has a dream to start his own company to promote renewable energy and ways to move forward in Cyprus and an NFT 'sale' could provide the capital needed for a good cause. The project comes with a basic website which will have a countdown when people will be able to buy, or better say, mint the generated NFTs and all profits would go directly to that very idea of trying to make our home, Cyprus, into the most enviromentally aware and efficient country in the EU. \n I know it's a far fetched goal but a journey of a thousand miles begins with a single step! :)",
      tools: {
        Remix: "Local smart contract development",
        Web3JS: "Blockchain Interaction",
        Truffle: "Development Framework",
        Ganache: "For Local Blockchain",
        InfuraIO: "For copying the Ethereum mainnet",
        MetaMask: "Ethereum Wallet",
        Javascript: "React & Testing"
      },
    },
    // {
    //   name: "useDapp Practice",
    //   icon: "ethereum",
    //   link: "https://remix-project.org/",
    //   description: "Local development and testing of smart contacts",
    //   animation: "slide-up"
    // },
    // {
    //   name: "EthersJS Practice",
    //   icon: "ethereum",
    //   link: "https://remix-project.org/",
    //   description: "Local development and testing of smart contacts",
    //   animation: "slide-left"
    // },
    // {
    //   name: "Scaffold-Eth Practice",
    //   icon: "ethereum",
    //   link: "https://github.com/scaffold-eth/scaffold-eth",
    //   description: "Random project to practice using scafford-eth a github repository for generating fast and efficiently blockchain projects",
    //   animation: "slide-left"
    // },
    {
      name: "Learning React - Part 1",
      icon: "react",
      gitLink: "https://github.com/Paps94/Learning-React-Part-1",
      link: "",
      description: "Small project to practice using react components, props and states as well as form validation. \n The app itself is small and not overly complex but I believe it contains some of the core features and blocks that you find in each React project like: \nComponents, Props, State with the useState hook, Styling, Lifting state(s) up, Pass functions between different components etc",
      animation: "zoom-in",
      tools: {
        Javascript: "React"
      },
    },
    {
      name: "Learning React - Part 2",
      icon: "react",
      gitLink: "https://github.com/Paps94/Learning-React-Part-2",
      link: "",
      description: "Local development and testing of smart contacts",
      tools: {
        Javascript: "React & Testing"
      },
      animation: "zoom-in-up"
    },
    {
      name: "Learning React - Part 3",
      icon: "react",
      link: "https://react-food-order-fc3c2.web.app/",
      gitLink: "https://github.com/Paps94/Learning-React-Part-3",
      description: "Complete food ordering app to test my react skills making use of hooks, states, HTTP requests, backend dbs (Firebase) and other. It's a combination of what I have learned from 'Learning React Part 1 & 2'",
      tools: {
        Javascript: "React & Testing"
      },
      animation: "zoom-out"
    },
    {
      name: "Learning React - Part 4",
      icon: "react",
      link: "https://class-based-react-components.web.app/",
      gitLink: "https://github.com/Paps94/Learning-React-Part-4",
      description: "Project to learn how the older version of react used to work using Class Based components instead of the new functional components you would find in most modern React projects. Even though chances say I will never use them it's good to have some idea of how they work in those wild cases which a project I am working on still use them!",
      tools: {
        Javascript: "React & Testing"
      },
      animation: "zoom-out"
    },
  ];

  return (
    <>
      <ul>
      {projects.map((val, i) => (
        <ProjectCard key={i} projectDetails={val} />
      ))}
      </ul>
    </>
  );
};

export default Service;
