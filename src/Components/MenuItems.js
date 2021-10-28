import React from 'react';
import Fade from 'react-reveal/Fade';

function MenuItems({ menuItems }) {
    return (
        <div className="portfolios">

            {
                menuItems.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <Fade big>
                            <div className="image-data">
                                <img src={item.image} alt="" />
                                <ul className="hover-items">
                                    <li>
                                        <a href={item.link1}>{item.icon1}</a>
                                    </li>
                                </ul>
                            </div>
                            <h5>
                                <a className="color" href={item.link2}>
                                    {item.title}
                                </a>
                            </h5>

                        
                        </Fade>

                    </div>
                })
            }





        </div>
    )
}

export default MenuItems
