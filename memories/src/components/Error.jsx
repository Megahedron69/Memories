import React from "react";
import { Link } from "react-router-dom";
const error = (props) => {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://i.redd.it/66f7sxz98k391.jpg"
        alt=""
        className="absolute h-full w-full object-cover"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            {props.errorcode === 403 ? (
              <span>Entry is forbidden</span>
            ) : (
              <span>You&#x27;re alone here</span>
            )}
          </h1>
          <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
            {props.errorcode}
          </p>
          <Link to="/">
            <button className="text-white bg-gradient-to-br text-xl font-bold from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">
              Back To Earth
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default error;
