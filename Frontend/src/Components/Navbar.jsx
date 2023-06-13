import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className=" bg-gray-800 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-rose-400 " >Crud App</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-14 text-white ">
            <Link
              to={"/"}
              className="mr-14 hover:text-gray-900 cursor-pointer text-lg"
            >
              Home
            </Link>
            <Link
              to={"/list"}
              className="mr-14 hover:text-gray-900 cursor-pointer text-lg"
            >
              List
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
