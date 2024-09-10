import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { CiTwitter } from "react-icons/ci";



const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white p-4 text-center">
        <h2 className="text-lg font-bold">
          DeConverters - Event Planning and Decoration
        </h2>
        <p className="text-gray-400">
          Contact us to make your event unforgettable
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-lg text-white hover:text-gray-300">
            Phone:08160170806
          </a>
          <a href="#" className="text-lg text-white hover:text-gray-300">
            Email:Priscabeljauni
          </a>
          <a href="#" className="text-lg text-white hover:text-gray-300">
            biu borno state
          </a>
        </div>
        <div className="mt-4 flex justify-center p-7 gap-4">
          <a href="#" className="text-lg text-white hover:text-gray-300">
            <BiLogoFacebookCircle size={50}/>
          </a>
          <a href="#" className="text-lg text-white hover:text-gray-300">
          <GrInstagram  size={50}/>

          </a>
          <a href="#" className="text-lg text-white hover:text-gray-300">
          <CiTwitter size={50} />

                  </a>
        </div>
        <p className="text-gray-400 mt-4">
          &copy; 2024 DeConverters - Event Planning and Decoration. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
