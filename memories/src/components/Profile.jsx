import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProfileCard from "../skeletons/Profilecard";
const Profile = () => {
  const { id } = useParams();
  const friends = Math.floor(Math.random() * 500) + 1;
  const comments = Math.floor(Math.random() * 800) + 1;
  const photos = Math.floor(Math.random() * 200) + 1;
  const [loading, setloading] = React.useState(true);
  const [alldata, setalldata] = React.useState();
  React.useEffect(() => {
    const getdata = async () => {
      const data = await axios.get(`/api/posts/${id}`);
      try {
        const res = await data.data;
        setalldata(res);
        setloading(false);
      } catch {
        console.log("error");
      }
    };
    getdata();
  }, [id]);
  return (
    <div class="shadow-lg rounded-xl w-full h-auto -mx-3  bg-white dark:bg-gray-800">
      {loading ? (
        <ProfileCard />
      ) : (
        <>
          <img
            alt="profil"
            src={alldata.image.coverimage}
            class="rounded-t-lg h-36 w-full mb-4 filter brightness-50 -z-10"
          />
          <div class="flex flex-col items-center justify-center p-4 -mt-16">
            <img
              alt="profil"
              src={alldata.image.dp}
              class="mx-auto object-cover rounded-full h-32 w-32 -my-1 border-2 border-white dark:border-gray-800 z-0"
            />
            <p class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
              {alldata.name.firstname}
              {""}
              {alldata.name.lastname}
            </p>
            <p class="text-gray-400 text-sm mb-4">{alldata.name.username}</p>
            <p class="text-md leading-normal mt-0 mb-2 text-gray-700 font-bold uppercase">
              &#x1F4CD; {alldata.location.state},{alldata.location.country}
            </p>
            <div class="rounded-lg p-2 w-full mt-4">
              <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                <p class="flex flex-col text-sm text-blueGray-400 ">
                  Memories
                  <span class="text-black dark:text-white text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-center">
                    {photos}
                  </span>
                </p>
                <p class="flex flex-col text-sm text-blueGray-400">
                  Followers
                  <span class="text-black dark:text-white text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-center">
                    {friends}
                  </span>
                </p>
                <p class="flex flex-col text-sm text-blueGray-400">
                  Comments
                  <span class="text-black dark:text-white text-xl font-bold block uppercase tracking-wide text-blueGray-600 text-center">
                    {comments}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, {alldata.name.username} the
                  name taken by {alldata.location.state}-raised,{" "}
                  {alldata.location.city}
                  -based {alldata.name.firstname} {alldata.name.lastname}{" "}
                  writes, performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An artist
                  of considerable range.Contact her at {alldata.email.user}
                </p>
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gradient">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
