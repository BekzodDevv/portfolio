import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from '../Components/Tittle';
import Fade from 'react-reveal/Fade';

function ContactPage() {
    return (
        <div>
            <div className="titleee">
                <Tittle title={"Contact"} span={"Contact"} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <Fade  left>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5335.275175542637!2d-122.01080787620951!3d37.333662978039875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2s!4v1625313246014!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </Fade>

                </div>
                <div className="contact-sect">
                    <Fade  right delay={1500}>
                        <ContactItem
                            icon={phone}
                            text={"+998998377738"}
                            title={'Phone'} />
                    </Fade>


                    <Fade  right delay={2000}>
                    <ContactItem
                        icon={email}
                        text={"Bekzodabdulla    @gmail.com"}
                        title={'Email'} />
                    </Fade>

                    <Fade  right delay={2500}>
                    <ContactItem
                        icon={location}
                        text={"Address"}
                        text2={"Uzbekistan"}
                        title={"Toshkent xoncharbog'"} />
                    </Fade>
                   

                   
                </div>



            </div>
        </div>
    )
}

export default ContactPage
