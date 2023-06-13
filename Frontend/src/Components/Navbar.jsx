import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header class="text-gray-600 body-font border">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Crud App</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center gap-14 text-base ">
            <Link
              to={"/"}
              class="mr-14 hover:text-gray-900 cursor-pointer text-lg"
            >
              Home
            </Link>
            <Link
              to={"/list"}
              class="mr-14 hover:text-gray-900 cursor-pointer text-lg"
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
