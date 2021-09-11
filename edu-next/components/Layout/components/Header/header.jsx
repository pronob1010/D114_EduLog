import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header({ auth, pram }) {
  // console.log("auth check ", auth)
  // console.log("fgfgfg", pram)
  const router = useRouter();

  // const [auth, setauth] = useState(auth);

  const logout = () => {
    console.log("Clicked")
    localStorage.clear();
    // router.push('/');
  };

  let menu;
  if (auth) {
    menu = (
      <ul className="sub-menu">
        <li>
          <a href="#">{auth.username}</a>
          <ul className="sub-menu-2">
            <li>
              <a href="dashboard.html">Dashboard</a>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
          <a onClick={logout}>Logout</a>
          </Link>
        </li>
      </ul>
    );
  }
  else {
    menu = (
      <ul className="sub-menu">
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
      </ul>
    );
  }

  // <li><a href="">{item.Base_Category_Title}</a></li>

  return (
    <>
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                datatarget="#themefie_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left"></span>
                <span className="icon-right"></span>
              </button>
            </div>
            <div className="logo">
              <Link href="/">
              <a className="main-logo">
                <img src="/assets/img/logo.png" alt="img" />
              </a>
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <ul>
                <li>
                  <a className="" href="#">
                    <i className="fa fa-shopping-basket"></i>
                  </a>
                </li>
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
                  <Link href="/courses">
                        <a>Courses</a>
                      </Link>
                  <ul className="sub-menu" id="demo">
                    
                    {pram.map((item) => {
                      return (
                        <li>
                          <a href="">{item.Base_Category_Title}</a>
                        </li>
                      );
                    })}
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
                  <a className="">
                    <i className="fas fa-user-circle"></i>
                  </a>
                  {menu}
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
  );
}
