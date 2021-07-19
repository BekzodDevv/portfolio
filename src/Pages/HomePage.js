import React from 'react';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span>Bekzod Dev</span>
                </h1>
                <p className="h-sub-text">
                Hi this is my personal website.Here you can see information about me and what I have done.I have graduated from PDP IT-Academy frontend direction.
                </p>
                <div className="icons">
                    <a href="https://www.instagram.com/abdullaev_zxc" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon fb" />
                    </a>
                    <a href="https://github.com/BekzodDevv" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                  
                    <a href="https://t.me/Bdeveloperr" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faTelegram} className="icon tg" />
                    </a>


                </div>
            </header>
        </div>
    )
}

export default HomePage