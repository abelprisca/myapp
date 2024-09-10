import React from "react";

const Main = ({title, subtitle, welcome}) => {
  // const {name,title,gender}=props
  // console.log(title,name,gender)

  return (
    <div>
      <div className=" p-0 ">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-20 rounded-lg shadow-lg w-5/5">
          <div className="container  p-4 text-center">
            <h1 className="text-4xl font-bold text-white">
              Hi there! {welcome}
              Event Planning & Decoration
            </h1>
            <p className="text-lg text-white">
              Make your event unforgettable with our expert planning and
              decoration services.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
                Get Started {title}
              </button>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white">Our Services</h2>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">Event Planning</h3>
                  <p className="text-gray-600">
                    From concept to execution, we'll take care of every detail.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">Decoration</h3>
                  <p className="text-gray-600">
                    Transform your space with our creative and elegant
                    decoration solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
