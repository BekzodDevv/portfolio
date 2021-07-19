import React from 'react'
import AllBlogs from '../Components/AllBlogs'
import Tittle from '../Components/Tittle'

function BlogsPage() {
    return (
        <div>
            <div className="b-title">
                <Tittle title={"Rescent Blogs"} span={"Rescent Blogs"} />
            </div>

            <div className="BlogsPage">
                {AllBlogs.map((blog) => {
                    return <div className="blog" key={blog.id}>
                        <div className="blog-content">
                            <img src={blog.image} alt="image" />
                            <a href={blog.link} className="blog-link">
                                {blog.title}
                            </a>


                        </div>
                    </div>
                })}


            </div>
        </div>
    )
}

export default BlogsPage
