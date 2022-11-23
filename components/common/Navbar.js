import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-primary-3 px-4 py-2">
      <div>
        <img
          src="https://softic.ai/wp-content/uploads/2022/04/Untitled-2-1.png"
          alt="logo"
          className="w-48"
        />
      </div>
      <ul className="flex items-center">
        <li className="text-base px-4 py-2 cursor-pointer rounded w-32 text-white hover:bg-primary-1 text-center">
          Home
        </li>
        <li className="text-base px-4 py-2 cursor-pointer rounded w-32 text-white hover:bg-primary-1 text-center">
          ABout
        </li>
        <li className="text-base px-4 py-2 cursor-pointer rounded w-32 text-white hover:bg-primary-1 text-center">
          Career
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
