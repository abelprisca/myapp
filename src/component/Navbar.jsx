import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-900 flex p-5 justify-between h-20">
      <div className="bg-white-400 p-2 "> Logo</div>

      <div >
        <input type="text" className="w-52 p-2 rounded-l-lg" />
        <button className="bg-purple-700 p-2 rounded-r-lg text-white font-semibold">
          Search
        </button>
      </div>
      <ul className="flex gap-5 p-2  w-1/4  text-cyan-200 text-2xl">
        <li className="cursor-pointer">HOME</li>
        <li className="cursor-pointer">ABOUT</li>
        <li className="cursor-pointer">ADMISSION </li>
        <li className="cursor-pointer">STUDENT</li>
      </ul>
      <div>
        <button className=" bg-slate-100 text-3xl">Contact|Us</button>
      </div>

    </div>
  );
};

export default Navbar;
 