import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Newpostskeletal from "../../skeletons/Newpostskeletal";
const Comment = () => {
  const { id } = useParams();
  const [postdata, setpostdata] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  React.useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("/api/posts");
      try {
        const res = await data.data;
        setpostdata(res);
        setloading(false);
      } catch {
        console.log("error");
      }
    };
    getdata();
  }, []);
  return (
    <div>
      <div class="bg-transparent mt-5">
        <div class="h-full px-2 ">
          {loading ? (
            [...Array(5)].map((elementInArray, index) => (
              <div className="mx-5 -my-16">
                <Newpostskeletal />
              </div>
            ))
          ) : (
            <>
              {postdata.map((entry) => {
                return (
                  <div
                    class="max-w-xl mx-auto bg-white shadow-lg rounded-md overflow-hidden mt-5"
                    key={entry._id}
                  >
                    <div class="md:flex">
                      <div class="w-full">
                        <div class="flex justify-between items-center p-4">
                          <Link to={`/home/profile/${entry._id}`}>
                            <div class="flex flex-row items-center cursor-pointer">
                              <img
                                alt="y"
                                src={entry.image.dp}
                                class="rounded-full"
                                width="40"
                              />

                              <div class="flex flex-row items-center ml-2">
                                <span class="font-bold mr-1">
                                  {entry.name.username}
                                </span>

                                <small class="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                              </div>
                            </div>
                          </Link>
                          <div class="pr-2">
                            <button
                              id="dropdownBottomButton"
                              data-dropdown-toggle="dropdownBottom"
                              data-dropdown-placement="bottom"
                              class="block p-2 bg-white rounded-md hover:bg-gray-100"
                              type="button"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </button>

                            <div
                              id="dropdownBottom"
                              class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                            >
                              <ul
                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownBottomButton"
                              >
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    View Profile
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Block User
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Earnings
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Sign out
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Link to={`/home/${entry._id}`}>
                            <img
                              alt="p"
                              src={entry.posts.postcontent}
                              class="w-full epum cursor-pointer"
                            />
                          </Link>
                        </div>

                        <div class="p-4 flex justify-between items-center">
                          <div class="flex flex-row items-center">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="ml-1">
                              {entry.posts.postlikesno}
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="css-i6dzq1 ml-3"
                            >
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            <span className="ml-1">
                              {entry.posts.postcommentno}
                            </span>
                          </div>

                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
