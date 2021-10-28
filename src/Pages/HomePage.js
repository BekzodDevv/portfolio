import React from 'react';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slide from 'react-reveal/Slide';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <Slide top>
                    <h1 className="hero-text">
                        Hi, I am
                        <span>Bekzod Dev</span>
                    </h1>
                </Slide>

                <Slide left>
                    <p className="h-sub-text">
                        Hi this is my personal website.Here you can see information about me and what I have done.I have graduated from PDP IT-Academy frontend direction.
                    </p>
                </Slide>

                <Slide right>
                    <div className="icons">
                        <a href="https://www.linkedin.com/feed/?trk=nav_logo" target="_blank" rel="noreferrer" className="icon-holder">
                            <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                        </a>
                        <a href="https://github.com/BekzodDevv" target="_blank" rel="noreferrer" className="icon-holder">
                            <FontAwesomeIcon icon={faGithub} className="icon gh" />
                        </a>

                        <a href="https://t.me/Bdeveloperr" target="_blank" rel="noreferrer" className="icon-holder">
                            <FontAwesomeIcon icon={faTelegram} className="icon tg" />
                        </a>

                    </div>
                </Slide>

            </header>
        </div>
    )
}

export default HomePage
