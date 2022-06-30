import React from "react";
import NewComment from "./NewComment";
import axios from "axios";
import { useParams } from "react-router-dom";
import Replybox from "./Replybox";
import Commentpageskel from "../../skeletons/Commentpageskel";
const Commentsection = () => {
  const { id } = useParams();
  const [commentdata, setcommentdata] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  const [replystat, setreplystat] = React.useState(false);
  React.useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("/api/posts/" + id);
      try {
        const res = await data.data;
        setcommentdata(res);
        setloading(false);
      } catch {
        console.log("error");
      }
    };
    getdata();
  }, [id]);
  const replymodal = () => {
    setreplystat((prev) => !prev);
  };
  return (
    <>
      {loading ? (
        <Commentpageskel />
      ) : (
        <div class="antialiased mx-auto max-w-screen-sm">
          <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
          <div class="space-y-4">
            <div class="flex">
              <div class="flex-shrink-0 mr-3">
                <img
                  class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src={commentdata.image.dp}
                  alt=""
                />
              </div>
              <div class="flex-1 border shadow-md rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
                <strong>{commentdata.name.username}</strong>{" "}
                <span class="text-xs text-gray-400">
                  {commentdata.posts.postDate.slice(11, 16)}
                </span>
                <p class="text-sm m-2 p-1">{commentdata.posts.posttitle}</p>
                <img
                  src={commentdata.posts.postcontent}
                  alt="imageuploaded"
                  className="mt-2 p-1 rounded-lg w-full remo item-center object-cover"
                ></img>
                <div class="mt-4 flex items-center">
                  <div class="flex -space-x-2 mr-2">
                    <img
                      class="rounded-full w-6 h-6 border border-white"
                      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                      alt=""
                    />
                    <img
                      class="rounded-full w-6 h-6 border border-white"
                      src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                      alt=""
                    />
                  </div>
                  <div class="text-sm text-gray-500 font-semibold">
                    {commentdata.posts.postcommentno} Replies
                  </div>
                </div>
              </div>
            </div>
            <NewComment />
            {commentdata.posts.Comments.map((entry) => {
              return (
                <div class="flex">
                  <div class="flex-shrink-0 mr-3">
                    <img
                      class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                      src={entry.author.authdp}
                      alt=""
                    />
                  </div>
                  <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white shadow-md">
                    <strong>{entry.author.authname}</strong>{" "}
                    <span class="text-xs text-gray-400">
                      {entry.postedDate.slice(11, 16)}
                    </span>
                    <p class="text-sm">{entry.commentText}</p>
                    <div className="flex-1 flex row justify-between mx-1 my-2 items-center">
                      <h4 class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                        Replies({entry.depth - 1})
                      </h4>
                      <button
                        type="button"
                        onClick={replymodal}
                        class="text-white font-semibold text-md  rounded-full  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        {replystat ? "Cancel" : "Reply"}
                      </button>
                    </div>
                    <div className="transition-all ease-out duration-200 ">
                      {replystat ? <Replybox depth={entry.depth} /> : ""}
                    </div>
                    {/*Replies part*/}
                    <div
                      className={
                        `space-y-4` + " " + entry.depth - 1 ? `` : `hidden`
                      }
                    >
                      <div class="flex">
                        <div class="flex-shrink-0 mr-3">
                          <img
                            class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                          />
                        </div>
                        <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed shadow-sm">
                          <strong>Sarah</strong>{" "}
                          <span class="text-xs text-gray-400">3:34 PM</span>
                          <p class="text-xs sm:text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                      <div class="flex">
                        <div class="flex-shrink-0 mr-3">
                          <img
                            class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                          />
                        </div>
                        <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                          <strong>Sarah</strong>{" "}
                          <span class="text-xs text-gray-400">3:34 PM</span>
                          <p class="text-xs sm:text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Commentsection;
