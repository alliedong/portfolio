import React from "react";
import SingleCard from "./SingleCard";
import "../styles/Cards.css";
import splitpeas from "../../images/splitpeasprojectgraphic.png";
import sportipaws from "../../images/sportipawsprojectgraphic.png";
import extendyourhorizons from "../../images/extendyourhorizonsprojectgraphic.png";
import moneytree from "../../images/moneytreeprojectgraphic.png"

function Cards(props) {
  return (
    <div className="cards" id="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <SingleCard
              src={splitpeas}
              text="A full stack grocery shopping mobile app targetted toward 
              university students to help them split trips and bills within a group. 
              Other features include recipe generators, coupon clippings and saved grocery lists.
              SplitPeas: Save Food. Save Money. Save Time."
              label="SplitPeas: UX Design, PM"
              path="https://bit.ly/3Ctr8xQ"
            />
            <SingleCard
              src={sportipaws}
              text="A specialized app to track physical activity during dog walks. Case study 
              completed with User Research, Competitive Analysis, information architecture and more
              to add in the creation of low and high fidelity prototypes."
              label="SportiPaws: UX Design Case Study"
              path="https://www.figma.com/file/AZGOEWi01akZdfRGZbNLHn/Dog-Walking-App"
            />
          </ul>
          <ul className="cards__items">
            <SingleCard
              src={extendyourhorizons}
              text="A practical chrome extension consisting of four features: a Pomodoro timer,
                a to-do list, a customizable website blocker, and an inspirational quote generator. 
                Goal is to help students with productivity, efficiency, and mental wellness."
              label="Extend Your Horizons: Design, Development, PM"
              path="https://devpost.com/software/extend-your-horizons"
            />
            <SingleCard
              src={moneytree}
              text="A gamefied, gardening-themed app to aid simple financial management, 
                promote financial literacy, and raise awareness about the environment for children. 
                Created to make personal finance more accessible, easy and engaging."
              label="MoneyTree: UX Design, PM"
              path="https://devpost.com/software/money-tree-personal-finance-management-for-all-youth"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
