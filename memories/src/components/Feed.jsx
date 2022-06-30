import React from "react";
import Comment from "./subcomponents/Comment";
import Newpost from "./subcomponents/Newpost";
const Feed = () => {
  return (
    <div>
      <Newpost />
      <Comment />
    </div>
  );
};

export default Feed;
