import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import ServicesSection from '../Components/ServicesSection'
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";


import Swing from 'react-reveal/Swing';
import Flash from 'react-reveal/Flash';


function About() {
    return (
        <div className="AboutPage">
            <Tittle title={"About Me"} span={"About Me"} />
            <ImageSection />
            <Tittle title={"My Skills"} span={"My Skills"} />


            <div className="skil-container">
            <Swing>
            <SkillsSection skill={"HTML"} progress={"70"} width={"70%"} />
                <SkillsSection skill={"CSS"} progress={"60"} width={"60%"} />
                <SkillsSection skill={"Sass"} progress={"40"} width={"40%"} />
                <SkillsSection skill={"Bootstrap"} progress={"50"} width={"50%"} />
                <SkillsSection skill={"Gulp"} progress={"50"} width={"50%"} />
                <SkillsSection skill={"Git"} progress={"30"} width={"30%"} />
                <SkillsSection skill={"Javascipt"} progress={"40"} width={"40%"} />
                <SkillsSection skill={"React Js"} progress={"40"} width={"40%"} />
                <SkillsSection skill={"Next Js"} progress={"40"} width={"40%"} />
        </Swing>
               
            </div>

            <Tittle title={"Services"} span={"Services"} />
            <div className="services-container">
                 <Flash>
                 <ServicesSection
                    image={design}
                    title={"Frontend"}
                    text={"I like the black frontend from the backend because I have a great interest in animation and javascript"} />


                <ServicesSection
                    image={intelligence}
                    title={"Intelligence"}
                    text={"I am not very good at finding problems and I am still working on it LeetCode.com is helping "} />


                <ServicesSection
                    image={gamedev}
                    title={"Game"}
                    text={"Yes, I like to play Dota 2, World of Warcraft, because my first interest in computers came from games. "} />

        </Flash>
               
            </div>



        </div>
    )
}

export default About
