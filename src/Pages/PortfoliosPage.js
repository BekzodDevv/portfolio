import React, { useState } from 'react';
import Caregories from '../Components/Caregories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import AllPort from "../Components/AllPort"

const  allCategories = ["All", ...new Set(AllPort.map(item => item.category))]


function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(AllPort);

const filter = (category) => {
 if(category === "All") {
     setMenuItems(AllPort)
     return;
 }

    const filteredData = AllPort.filter((item) => {
        return item.category === category;
    })
    setMenuItems(filteredData);
}

    return (
        <div className="PortfoliosPage">
            <div className="titlee">
                <Tittle title={"Portfolios"} span={"Portfolios"} />
            </div>
            <div className="portolios-data">

                <Caregories categories={categories} filter={filter} />
              
              
                <MenuItems menuItems={menuItems} />
            </div>




        </div>
    )
}

export default PortfoliosPage
