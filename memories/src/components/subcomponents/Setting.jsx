import React from "react";
import { Link, Outlet } from "react-router-dom";
import Updateprofile from "./Updateprofile";
import { Deleteprofile } from "./Deleteprofile";
const Setting = () => {
  return (
    <div className="flex flex-col justify-around items-center">
      <div className="flex flex-row justify-evenly items-center">
        <Link to="/home/settings/update" element={<Updateprofile />}>
          <div class="flex flex-col justify-between items-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Update Profile
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <svg
                x="0px"
                y="0px"
                width="60"
                height="60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                style={{ fill: "green" }}
              >
                <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" />
              </svg>
            </p>
          </div>
        </Link>
        <Link to="/home/settings/delete" element={<Deleteprofile />}>
          <div class="flex flex-col justify-evenly items-center mx-8 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Delete Profile
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 30 30"
                style={{ fill: "red" }}
              >
                {" "}
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
              </svg>
            </p>
          </div>
        </Link>
      </div>
      <div className="p-6 my-8 w-full  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Outlet />
      </div>
    </div>
  );
};

export default Setting;
