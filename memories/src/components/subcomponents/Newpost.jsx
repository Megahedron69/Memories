import axios from "axios";
import React from "react";
import FileBase64 from "react-file-base64";
import { getAuth } from "firebase/auth";

const Newpost = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const initialstate = {
    username: "",
    userdp: "",
    postimage: "",
    posttext: "",
  };
  const [formdata, setformdata] = React.useState(initialstate);
  const [modalopen, setmodalopen] = React.useState(false);
  const handlechange = (event) => {
    const { name, value } = event.target;
    setformdata((prev) => {
      return {
        ...prev,
        username: user.displayName,
        userdp: user.photoURL,
        [name]: value,
      };
    });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    axios.post("/api/posts/newpost", {
      username: formdata.username,
      userdp: formdata.userdp,
      postimage: formdata.postimage,
      posttext: formdata.posttext,
    });
    setformdata(initialstate);
  };

  return (
    <form method="post" onSubmit={handlesubmit}>
      <div class="mb-5 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" class="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="4"
            name="posttext"
            value={formdata.posttext}
            onChange={handlechange}
            class="px-0 w-full text-base font-medium text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="&#9998; Write Something..."
            required
          ></textarea>
        </div>

        <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600 bg-white">
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-bold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 gradient "
          >
            Post Memory
          </button>
          <div class="flex pl-0 space-x-1 sm:pl-2">
            <button
              type="button"
              class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                setmodalopen((prev) => !prev);
              }}
              class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={modalopen ? `visible` : `hidden`}>
          <FileBase64
            multiple={false}
            onDone={({ base64 }) =>
              setformdata((prev) => {
                return {
                  ...prev,
                  postimage: base64,
                };
              })
            }
          />
        </div>
      </div>
    </form>
  );
};

export default Newpost;
