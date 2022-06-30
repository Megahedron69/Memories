import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Updateprofile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [fillform, setfillform] = React.useState({
    displayname: "",
    about: "",
    dp: "",
    coverdp: "",
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    address: "",
    state: "",
    city: "",
  });
  const handlechange = (event) => {
    const { name, value } = event.target;
    setfillform((prev) => {
      return {
        ...prev,
        displayname: user.displayName,
        dp: user.photoURL,
        email: user.email,
        [name]: value,
      };
    });
  };
  console.log(fillform);
  const handleSubmit = (event) => {
    event.preventDefault();
    const setlocal = () => {
      const entry = {
        about: fillform.about,
        firstname: fillform.firstname,
        lastname: fillform.lastname,
        country: fillform.country,
        address: fillform.address,
        state: fillform.state,
        city: fillform.city,
      };
      const sendentry = JSON.stringify(entry);
      localStorage.setItem(user.uid, sendentry);
    };
    setlocal();
    navigate("/home/userprofile");
  };
  return (
    <div class="max-w-2xl mx-auto bg-white p-16">
      <form onSubmit={handleSubmit}>
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              for="firstname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              First name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={fillform.firstname}
              onChange={handlechange}
              placeholder="First Name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="lastname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={fillform.lastname}
              onChange={handlechange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="Username"
              name="username"
              value={fillform.displayname}
              onChange={handlechange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              value={fillform.country}
              onChange={handlechange}
              autoComplete="country-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>
          <div className="w-max">
            <textarea
              id="about"
              name="about"
              value={fillform.about}
              onChange={handlechange}
              rows={3}
              className="shadow-sm bg-gray-50 mx-12 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-max p-5 sm:text-sm border border-gray-300 rounded-md"
              placeholder="About you"
              defaultValue={""}
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Address
          </label>
          <input
            type="text"
            id="email"
            name="address"
            value={fillform.address}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Address"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            id="password"
            value={fillform.state}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="State"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="confirm"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="confirm"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="City"
            value={fillform.city}
            onChange={handlechange}
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Updateprofile;
