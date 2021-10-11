import React from 'react'

function ContactItem({ icon, text, text2, title }) {
    return (
        <div className="contactItem">
            <div className="contect">
                <img src={icon} alt="icons" />
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text}</p>
                    <p>{text2}</p>
                </div>
            </div>



        </div>
    )
}

export default ContactItem
