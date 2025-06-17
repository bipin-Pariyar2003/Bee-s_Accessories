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
        <li className="mr-4">
          <p className="text-blue-500">Hello {authUser?.fullname}!!🩷</p>
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
        className={`max-w-screen-2xl h-14 md:h-16 py-2 container mx-auto px-4 md:px-20 fixed top-0 z-50 right-0 left-0 ${
          sticky
            ? "navbar-sticky shadow-md bg-base-200 duration-300 transition-all ease-in-out"
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
                className="grow outline-none bg-transparent"
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>

          <div className="navbar-end">
            {authUser ? (
              <Logout />
            ) : (
              <>
                <a
                  className="btn bg-black text-white"
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
