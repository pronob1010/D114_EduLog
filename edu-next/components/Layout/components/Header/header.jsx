import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../pages/redux/actions/login";
export default function Header() {

  const dispatch = useDispatch();

  const authID=useSelector(state => state.user.log.userId);
  const auth= useSelector(state => state.user.Userdata.find( ele => ele.id === Number(authID)));

  const logoutHandel = () => 
  {
    console.log("")
    dispatch(logout())
    localStorage.clear();
  };

  const categories_List= useSelector(state => state.course.Categories)

  let menu;

  if (auth) {
    menu = (
      <ul className="sub-menu">
        <li>
          <Link href="/profile">
          <a>{auth.username}</a>
          </Link>
          <ul className="sub-menu-2">
            <li>
            <Link href="user-dashboard">
              <a>Dashboard</a>
            </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
          <a onClick={logoutHandel}>Logout</a>
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

                    {categories_List.map((item) => {
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
