
import "./App.css"
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Certificates from "./Pages/Certificates";

import { useState } from "react";




function App() {

   const [navToggle, setNavToggle] = useState(false);

   const navClick = () => {
      setNavToggle(!navToggle)
   }


   return (
      <div className="App">
         <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
            <Navbar navClick={navClick} />
         </div>

         <div className="nav-btn" onClick={navClick}>
            <div className="lines-1"></div>
            <div className="lines-2"></div>
            <div className="lines-3"></div>
         </div>



         <div className="main-content">

            <div className="content">
               <Routes>
                  <Route path="/" element={<HomePage />}  />
                  <Route path="About" element={<About />} />
                  <Route path="Certificates" element={<Certificates />} />
                    <Route path="portfolios" element={<PortfoliosPage />} />
                  <Route path="blogs" element={<BlogsPage />} />
                  <Route path="contact" element={<ContactPage />} />

               </Routes>

            </div>
         </div >









      </div >
   );
}

export default App;
