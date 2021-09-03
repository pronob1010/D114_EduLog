import Link from 'next/link'

export default function Header(){
    return(
        <>
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
                    <a className="main-logo" href="index.html"><img src="assets/img/logo.png" alt="img" /></a>
                </div>
                <div className="nav-right-part nav-right-part-mobile">
                    <ul>
                        <li><a className="" href="#"><i className="fa fa-shopping-basket"></i></a></li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="themefie_main_menu">

                    <ul className="navbar-nav menu-open text-end">
                        <li className="current-menu-item">
                            <Link href="/">
                            <a>Home</a>
                            </Link>
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
                            <a href="blog.html">Blog</a>
                        </li>
                        <li className="current-menu-item">
                            <Link href="/about">
                            <a>About</a>
                            </Link>
                        </li>

                        <li className="menu-item-has-children">
                            <a className=""><i className="fas fa-user-circle"></i></a>
                            <ul className="sub-menu">
                                <li><a href="#">Pronob1010</a>
                                    <ul className="sub-menu-2">
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link href="/login">
                                    <a className="">Login</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup">
                                    <a className="">Sign Up</a>
                                    </Link>
                                </li>
                                <li><a href="#" className="">Logout</a></li>
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
    </>
    )
}