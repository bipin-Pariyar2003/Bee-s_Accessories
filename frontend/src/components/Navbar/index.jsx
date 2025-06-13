import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthProvider";
import Login from "../Login";
import Logout from "../Logout";
import CartModal from "../CartModal";

const Navbar = () => {
  const navigate = useNavigate();
  const isHomePage = window.location.pathname === "/";
  const isBrowsePage = window.location.pathname === "/browse";
  const isAboutPage = window.location.pathname === "/about";
  const isContactPage = window.location.pathname === "/contact";
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");
  const [authUser, setAuthUser] = useAuth();
  console.log("Auth user from navbar:", authUser);
  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  const [sticky, setSticky] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarItems = (
    <>
      {authUser && (
        <li>
          <p className="text-pink-500 bg-pink-100 rounded-md">{authUser?.fullname}</p>
        </li>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="h-5 w-5 my-auto inline-block mr-2 hover:scale-110 cursor-pointer"
        fill="currentColor"
        onClick={() => document.getElementById("CartModal").showModal()}
      >
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>

      <li
        onClick={() => navigate("/")}
        className={`${isHomePage ? "text-pink-500 underline" : ""}`}
      >
        <a>Home</a>
      </li>
      <li
        onClick={() => navigate("/browse")}
        className={`${isBrowsePage ? "text-pink-500 underline" : ""}`}
      >
        <a>Accessories</a>
      </li>
      <li
        onClick={() => navigate("/about")}
        className={`${isAboutPage ? "text-pink-500 underline" : ""}`}
      >
        <a>About</a>
      </li>
      <li
        onClick={() => navigate("/contact")}
        className={`${isContactPage ? "text-pink-500 underline" : ""}`}
      >
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl h-14 md:h-16 py-2 container mx-auto px-4 md:px-20 fixed top-0 z-50 right-0 left-0 dark:bg-gray-800 dark:text-white ${
          sticky
            ? "navbar-sticky shadow-md bg-base-200 duration-300 transition-all ease-in-out dark:bg-gray-800 dark:text-white"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navbarItems}
            </ul>
          </div>
          <a
            className="btn btn-ghost text-md md:text-2xl  "
            onClick={() => navigate("/")}
          >
            Bee's Accessories 🐝
          </a>
        </div>
        <div className="navbar-end space-x-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbarItems}</ul>
          </div>
          <div className="hidden md:block  ">
            <label className="flex border rounded-md px-2 py-1 items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                className="grow outline-none bg-transparent dark:text-white"
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>

          <div className="navbar-end space-x-2">
            <label className="swap swap-rotate ">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {authUser ? (
              <Logout />
            ) : (
              <>
                <a
                  className="btn bg-black text-white dark: shadow-none dark: border-none"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </a>
                <Login />
                <CartModal />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
