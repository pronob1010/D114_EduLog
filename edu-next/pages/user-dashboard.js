import { Link } from "next/link";

export default function UserDashboard() {
    
    return (
    <>
    <br></br>
    <br></br>
    <section className="admin-dashboard-section">
        <header className="navbar-area">
            <nav className="navbar navbar-expand-lg">
                <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                        <button className="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-left"></span>
                            <span className="icon-right"></span>
                        </button>
                    </div>
                    <div className="logo">
                        <a className="main-logo" href="index.html"><img src="assets/img/logo.png" alt="img"/></a>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                        <ul>
                            <li><a className="" href="#"><i className="fa fa-shopping-basket"></i></a></li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="themefie_main_menu">
    
                        <ul className="navbar-nav menu-open text-end">
                            <li className="current-menu-item">
                                <a href="index.html">Home</a>
                            </li>
    
                            <li className="menu-item-has-children">
                                <a href="#">Courses</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-cat.html">Blog Category</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                    <li><a href="course.html">Course</a></li>
                                    <li><a href="course-details.html">Course Details</a></li>
                                    <li><a href="category.html">Category</a></li>
                                    <li><a href="instructor.html">Instructor</a></li>
                                    <li><a href="instructor-details.html">Single Instructor</a></li>
                                    <li><a href="dashboard.html">Dashboard</a></li>
                                    <li><a href="zoom-meeting.html">Zoom with Us</a></li>
                                </ul>
                            </li>
                            <li className="current-menu-item">
                                <a href="index.html">Resources</a>
                            </li>
                            
                            <li className="current-menu-item">
                                <a href="index.html">About</a>
                            </li>
    
                            <li className="menu-item-has-children">
                                <a className=""><i className="fas fa-user-circle"></i></a>
                                <ul className="sub-menu">
                                    <li><a href="dashboard.html">Pronob1010</a>
                                        <ul className="sub-menu-2">
                                            <li><a href="dashboard.html">Dashboard</a></li>
                                            <li><a href="dashboard-profile.html">My Profile</a></li>
                                            <li><a href="dashboard.html">Dashboard</a></li>
                                        </ul>
                                    </li>
    
                                    <li><a href="login.html">Log In</a></li>
                                    <li><a href="signup.html" className="">Sign Up</a></li>
                                    <li><a href="#" className="">Sign Out</a></li>
                                </ul>
                            </li>
                            <li className="current-menu-item">
                                <a href=" "> </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </header>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container admin-dashboard-side">
            <div className="main-header">
                <div className="header-wraper">
                    <div className="row">
                        <div className="col-xl-6">
                            <span className="header-user">
                                <a href="#"><img src="assets/img/author/02.png" alt="img"/></a>
                                <span>Hello,
                                    <p className="profile-title">Pronob Mozumder</p>
                                </span>
                            </span>
                        </div>
                        <div className="col-xl-6 align-self-center text-lg-end">
                            <div className="d-lg-flex align-items-center">
                                <div className="user-rating text-center d-inline-block">
                                    <span className="d-block">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                    4.0 (172 Ratings)
                                </div>
                                <a className="header-btn btn btn-white" href="dashboard-profile.html">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="dashboard-area">
                <h5 className="dashboard-title">Dashboard</h5>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-dashboard-inner">
                            <img src="assets/img/icon/open-book.png" alt="img"/>
                            <div className="media-body">
                                <h4>12</h4>
                                <p>Enrolled Courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-dashboard-inner">
                            <img src="assets/img/icon/open-book.png" alt="img"/>
                            <div className="media-body">
                                <h4>6</h4>
                                <p>Active Courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-dashboard-inner">
                            <img src="assets/img/icon/open-book.png" alt="img"/>
                            <div className="media-body">
                                <h4>1</h4>
                                <p>Completed Courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-dashboard-inner">
                            <img src="assets/img/icon/open-book.png" alt="img"/>
                            <div className="media-body">
                                <h4>12,273</h4>
                                <p>Total Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-dashboard-inner">
                            <img src="assets/img/icon/open-book.png" alt="img"/>
                            <div className="media-body">
                                <h4>10</h4>
                                <p>Total Courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-dashboard-inner">
                            <img src="assets/img/icon/open-book.png" alt="img"/>
                            <div className="media-body">
                                <h4>$1,232</h4>
                                <p>Total Earnings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-course">
                <div className="dashboard-course-area">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="dashboard-title">My Enrolled Courses</h5>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true"> All Courses </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false"> Wishlist </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">You May Like</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                            aria-labelledby="pills-home-tab">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url('/assets/img/lesson/2.png')" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-1" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "background-image: url(assets/img/lesson/3.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-2" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/4.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-3" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/5.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-4" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/6.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-5" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/7.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-6" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                            aria-labelledby="pills-profile-tab">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/6.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-7" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/7.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-8" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                            aria-labelledby="pills-contact-tab">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/6.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-9" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-course-wrap media">
                                        <div className="thumb" style={{ backgroundImage : "url(assets/img/course/7.png)" }}>
                                        </div>
                                        <div className="wrap-details">
                                            <h6><a href="#">PHP for Beginners - Become a PHP Master - CMS Project</a>
                                            </h6>
                                            <div className="user-area">
                                                <div className="user-details">
                                                    <img src="assets/img/author/1.png" alt="img"/>
                                                    <a href="#">Jessica Jessy</a>
                                                </div>
                                                <div className="user-rating">
                                                    <span><i className="fa fa-star"></i>
                                                        4.9</span>(76)
                                                </div>
                                            </div>
                                            <div className="progress-item">
                                                <div className="row align-items-center">
                                                    <div className="col-5">
                                                        <span>Total Lessons: <span>8</span></span>
                                                    </div>
                                                    <div className="col-7 text-end">
                                                        <span>Completed Lessons: <span>1 / 8</span></span>
                                                    </div>
                                                </div>
                                                <div className="progress-bg">
                                                    <div id="progress-10" className="progress-rate" data-value="13">
                                                        <div className="progress-count-wrap">
                                                            <span className="progress-count counting"
                                                                data-count="13">0</span>
                                                            <span className="counting-icons">% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 className="dashboard-title">Purchase History</h5>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Course Name</th>
                                <th scope="col">Total Enrolled</th>
                                <th scope="col">Rating </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Java (Beginner) Programming Tutorials
                                </th>
                                <td>10</td>
                                <td>
                                    <span className="user-rating">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            4.9
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Java (Beginner) Programming Tutorials
                                </th>
                                <td>10</td>
                                <td>
                                    <span className="user-rating">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            4.9
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Java (Beginner) Programming Tutorials
                                </th>
                                <td>10</td>
                                <td>
                                    <span className="user-rating">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            4.9
                                        </span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br>

                <h5 className="dashboard-title">Earning History</h5>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Course Name</th>
                                <th scope="col">Total Enrolled</th>
                                <th scope="col">Rating </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Java (Beginner) Programming Tutorials
                                </th>
                                <td>10</td>
                                <td>
                                    <span className="user-rating">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            4.9
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Java (Beginner) Programming Tutorials
                                </th>
                                <td>10</td>
                                <td>
                                    <span className="user-rating">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            4.9
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Java (Beginner) Programming Tutorials
                                </th>
                                <td>10</td>
                                <td>
                                    <span className="user-rating">
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            4.9
                                        </span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
     </>
  );
}
