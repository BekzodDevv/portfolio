import React from 'react';
import Tittle from '../Components/Tittle';
import AllCertificates from '../Components/AllCertificates';
import Fade from 'react-reveal/Fade';


function Certificates() {
    return (
        <div className="Certificates">
            <div className="">
                <Tittle title={"Certificates"} span={"Certificates"} />
            </div>

            <div className="Cer">
                {AllCertificates.map((blog) => {
                    return <div className="blog" key={blog.id}>
                        <Fade top>
                            <div className="blog-content">
                                <img src={blog.image} alt="" />
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>


                            </div>
                        </Fade>

                    </div>
                })}


            </div>




        </div>

    )
}

export default Certificates
