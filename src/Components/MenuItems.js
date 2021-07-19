import React from 'react'

function MenuItems({ menuItems }) {
    return (
        <div className="portfolios">

            {
                menuItems.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="image" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>

                            </ul>

                        </div>
                        <h5>
                            {item.title}
                        </h5>

                        <p>placeholder paragraph</p>
                    </div>
                })
            }





        </div>
    )
}

export default MenuItems
