import React from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
export const Userprof = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const details = JSON.parse(localStorage.getItem(user.uid));

  return (
    <div>
      {details ? (
        <section class="text-gray-600 body-font bg-white rounded-lg shadow-lg">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://source.unsplash.com/random/?mountains"
                />
              </div>
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img
                      src={user.photoURL}
                      alt="content"
                      className=" rounded-full"
                    />
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                      {user.displayName}
                    </h2>
                    <div class="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                    <p class="text-sm pr-8 text-gray-400">{details.about}</p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p class="leading-relaxed text-lg mb-4">
                    An artist of considerable range, {details.username} the name
                    taken by {details.state}-raised, {details.city}
                    -based {details.firstname} {details.lastname} writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.Contact her at {user.email}
                  </p>
                  <a class="text-red-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="bg-white rounded-lg shadow-lg">
          <div
            class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
            role="alert"
          >
            <span class="font-medium mr-1">Incomplete Profile!</span>
            <Link
              to="/home/settings/update"
              class="font-semibold mr-1 underline hover:text-yellow-800 dark:hover:text-yellow-900"
            >
              Click here
            </Link>
            to complete your profile
          </div>
        </div>
      )}
    </div>
  );
};
