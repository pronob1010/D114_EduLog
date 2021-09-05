import Image from 'next/image'
export default function Footer(){
    return(
        <>
        <footer className="footer-area">
        <div className="footer-inner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-4 col-sm-6">
                        <div className="footer-widget widget widget_link">
                            <h4 className="widget-title">Categories</h4>
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="pe-5">
                                        <li><a href="category.html">Development</a></li>
                                        <li><a href="category.html">Business</a></li>
                                        <li><a href="category.html">Finance & Accounting</a></li>
                                        <li><a href="category.html">IT & Software</a></li>
                                        <li><a href="category.html">Office Productivity</a></li>
                                        <li><a href="category.html">Design</a></li>
                                        <li><a href="category.html">Marketing</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul className="pe-5">
                                        <li><a href="category.html">Lifiestyle</a></li>
                                        <li><a href="category.html">Photography & Video</a></li>
                                        <li><a href="category.html">Health & Fitness</a></li>
                                        <li><a href="category.html">Music</a></li>
                                        <li><a href="category.html">UX Design</a></li>
                                        <li><a href="category.html">Seo</a></li>
                                        <li><a href="category.html">Business Analysis and Strategy</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <ul>
                                        <li><a href="category.html">Customer Service</a></li>
                                        <li><a href="category.html">Human Resources</a></li>
                                        <li><a href="category.html">Leadership and Management
                                            </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="footer-widget widget widget_link">
                            <h4 className="widget-title">Link</h4>
                            <ul className="pe-4">
                                <li><a href="blog.html">News & Blogs
                                    </a></li>
                                <li><a href="blog-cat.html">Blog Category</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                                <li><a href="course.html">Course</a></li>
                                <li><a href="course-details.html">Course Details</a></li>
                                <li><a href="instructor.html">Instructor</a></li>
                                <li><a href="instructor-details.html">Instructor Details</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="footer-widget widget widget_link">
                            <h4 className="widget-title">Support</h4>
                            <ul className="pe-4">
                                <li><a href="index.html">Documentation</a></li>
                                <li><a href="faq.html">FAQS</a></li>
                                <li><a href="dashboard.html">Dashboard</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-xl-7 align-self-center">
                        <div className="d-md-flex align-items-center mb-4 mb-xl-0">
                            <div className="logo d-inline-block">
                               <img src="assets/img/logo.png" alt="img" />
                            </div>
                            <div className="copyright-area">
                                <p>© 2021 - Themefie. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 align-self-center text-xl-end">
                        <ul className="social-area d-inline-block">
                            <li><a className="active" href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        </ul>
                        <select className="single-select float-sm-end">
                            <option>English</option>
                            <option value="asc">Bangla</option>
                            <option value="desc">Spanish</option>
                            <option value="pop">France</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>  
    </footer>

    <div className="back-to-top">
        <span className="back-top"><i className="fas fa-angle-double-up"></i></span>
    </div>    
    </>
    )
}