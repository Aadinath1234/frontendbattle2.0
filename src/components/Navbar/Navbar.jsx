import React, { useState, useEffect } from "react";


function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode and persist theme
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <div className="sticky top-0 z-50 scroll-smooth">
      <div className="navbar bg-black dark:bg-black dark:text-white text-white shadow-sm">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 gap-4 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li>
                <a href="#home" className="bg-blue-200 rounded-2xl p-4 text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#customers" className="bg-blue-200 rounded-2xl p-4 text-black">Customers</a>
              </li>
              <li>
                <a href="#carousel" className="bg-blue-200 rounded-2xl p-4 text-black">Carousel</a>
              </li>
              <li>
                <a href="#parallax" className="bg-blue-200 rounded-2xl p-4 text-black">Parallax</a>
              </li>
              <li>
                <a href="#showcase" className="bg-blue-200 rounded-2xl p-4 text-black">Showcase</a>
              </li>
              <li>
                <a href="#stats" className="bg-blue-200 rounded-2xl p-4 text-black">Stats</a>
              </li>
              <li>
                <a href="#testimonials" className="bg-blue-200 rounded-2xl p-4 text-black">Testimonials</a>
              </li>
              <li>
                <a href="#footer" className="bg-blue-200 rounded-2xl p-4 text-black">Footer</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Kkkk.Coders</a>
        </div>

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-4 gap-4 ">
            <li>
              <a
                href="#home"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#customers"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Customers
              </a>
            </li>
            <li>
              <a
                href="#carousel"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Carousel
              </a>
            </li>
            <li>
              <a
                href="#parallax"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Parallax
              </a>
            </li>
            <li>
              <a
                href="#showcase"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Showcase
              </a>
            </li>
            <li>
              <a
                href="#stats"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Stats
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="bg-blue-200 rounded-2xl p-4 text-black text-lg"
              >
                Footer
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button onClick={toggleDarkMode} className="btn btn-outline">
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;




