import React from 'react';
import about from "../img/abo.png";
import Zoom from 'react-reveal/Zoom';


function ImageSection() {
    return (
        <div className="ImageSection">


            <Zoom left duration={1200}>
                <div className="img">
                    <img src={about} alt="aboutt" />
                </div>
            </Zoom>



            <div className="about-info">
            <Zoom right duration={1200}>
            <h4>I am <span>Bekzod Dev</span> </h4>
                <p className="about-text">
                    Hi i Bekzod Dev I have been interested
                    in the web programming profession since 2020
                    and I wanted to try myself in this field
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Bekzod Dev</p>
                        <p>: 21</p>
                        <p>: Uzbekistan</p>
                        <p>: Uz</p>
                        <p>: 27-uy mevazor</p>
                        <p>: Uzbekistan Toshkent city</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
        </Zoom>
               

                

            </div>


        </div>
    )
}

export default ImageSection
