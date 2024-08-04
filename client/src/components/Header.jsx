import { Link, useLocation } from "react-router-dom";
import logo from "../assets/osaagoslogo.png";
import logo2 from "../assets/logo.jpg";
import React, { useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const location = useLocation();
  const dashboard = location.pathname === "/dashboard";
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const ref = useRef(null);

  function clickMenu() {
    setMenuOpen(true);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  const handleSearch = () => {
    // Dummy data for search results
    const alumniList = [
      { id: 1, name: "Ibrahim" },
      { id: 2, name: "Ibrahim" },
    ];

    const results = alumniList.filter((alumni) =>
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <header className="sticky top-0 z-[100]">
        <div
          className={`bg-blue-800 flex justify-between ${
            dashboard ? "mb-3" : ""
          } text-white py-3 px-4`}
        >
          <Link to="/">
            <div
              className={`${
                !dashboard && "hidden"
              } mx-10 flex flex-col justify-center items-center`}
            >
              <img
                className="w-[2rem] h-[2rem] object-cover"
                src={logo2}
                alt="OSAAGOS Logo"
              />
            </div>
          </Link>
          <div className="flex gap-2 px-2">
            <article className="flex items-center bg-[rgba(204,204,204,.3)]  rounded-md overflow-hidden">
              <span className="sm:px-2 px-1 h-full bg-orange-400 font-bold sm:text-xl text-lg flex items-center cursor-pointer">
                <CiSearch />
              </span>
              <input
                type="text"
                className="bg-transparent border-0 outline-0 px-1 lg:px-2 py-1 inline-flex"
                placeholder="Search Alumni ..."
              />
            </article>
            <Link to="/login" className="hidden lg:inline-block">
              <li className="bg-orange-400 hover:bg-orange-600 transition-all duration-200 px-5 py-2 rounded-lg list-none">
                Login
              </li>
            </Link>
            <Link
              to="/sign-up"
              className="px-5 py-2 bg-orange-400 hover:bg-orange-600 transition-all duration-200 rounded-lg list-none hidden lg:inline-block"
            >
              <li>Register</li>
            </Link>
          </div>
        </div>
        <div
          className={`flex justify-between items-center px-10 py-4 relative ${
            dashboard && "hidden"
          } bg-white items-center shadow-lg`}
        >
          <Link to="/">
            <div className="flex flex-col justify-start items-start">
              <img
                src={logo2}
                alt="logo"
                className="w-[2rem] h-[2rem] object-cover"
              />
            </div>
          </Link>

          <div
            className={`px-8 lg:px-0 justify-end lg:basis-[70%]  lg:-translate-x-0  pt-14 lg:py-0 test top-0 left-0 bg-blue-800 lg:bg-transparent sm:w-[20rem] w-full lg:w-full h-full transition-all duration-200 ${
              menuOpen ? "" : "-translate-x-[100%]"
            }`}
            ref={ref}
            onClick={() => setMenuOpen(false)}
          >
            <div
              onClick={closeMenu}
              className="lg:hidden text-3xl cursor-pointer text-white absolute top-2 left-4"
            >
              <IoIosCloseCircleOutline />
            </div>
            <ul className="flex lg:flex-row justify-between flex-col gap-2 text-white lg:text-black lg:text-sm whitespace-nowrap">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/aboutus">
                <li>About Us</li>
              </Link>
              <Link to="/events">
                <li>Events</li>
              </Link>
              <Link to="/news">
                <li>News & Announcements</li>
              </Link>
              <Link to="/jobs">
                <li>Job Board</li>
              </Link>
              <Link to="/donations">
                <li>Donations</li>
              </Link>
              <Link to="/media">
                <li>Media Gallery</li>
              </Link>
              <Link to="/contactus">
                <li>Contact Us</li>
              </Link>
              <Link to="/dashboard">
                <li>Admin Dashboard</li>
              </Link>

              <div className="lg:hidden mt-6 flex flex-col gap-5">
                <Link to="/login">
                  <li className="bg-orange-400 hover:bg-orange-600 transition-all duration-200  px-5 py-2 rounded-lg list-none">
                    Login
                  </li>
                </Link>
                <Link to="/sign-up">
                  <li className="px-5 py-2 hover:bg-orange-600 bg-orange-400 transition-all duration-200  rounded-lg list-none border">
                    Register
                  </li>
                </Link>
              </div>
            </ul>
          </div>

          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={clickMenu}
          >
            <HiMenuAlt3 />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
