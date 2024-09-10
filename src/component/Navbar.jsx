import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-300 flex p-5 justify-between">
      <div className="bg-blue-400 p-2 "> Logo</div>

      <div>
        <input type="text" className="w-52 p-2 rounded-l-lg" />
        <button className="bg-blue-700 p-2 rounded-r-lg text-white font-semibold">
          Search
        </button>
      </div>
      <ul className="flex gap-5 p-2">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Academics</li>
        <li className="cursor-pointer">Admissions</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
