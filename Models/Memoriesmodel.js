const mongoose = require("mongoose");
const schema = mongoose.Schema;

const MemoriesSchema = new schema({
  name: {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
    },
    myuser: {
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      username: {
        type: String,
      },
    },
  },
  email: {
    user: { type: String },
    myuser: { type: String },
  },
  about: {
    user: { type: String },
    myuser: {
      about: {
        type: String,
      },
    },
  },
  location: {
    country: {
      type: String,
      enum: ["India", "Canada", "Mexico"],

      default: "India",
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    zipcode: {
      type: String,
    },
    myuser: {
      country: {
        type: String,
        enum: ["India", "Canada", "Mexico"],
        default: "India",
      },
      state: {
        type: String,
      },
      city: {
        type: String,
      },
      address: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
  },
  posts: {
    postno: Number,
    posttitle: String,
    postcontent: {
      type: String,
      default: "https://via.placeholder.com/485x487?text=Image+not+uploaded",
    },
    postlikesno: {
      type: Number,
      default: 0,
    },
    postcommentno: {
      type: Number,
      default: 0,
    },
    postDate: { type: Date, default: Date.now },
    Comments: [
      {
        postId: {
          type: Number,
        },
        depth: {
          type: Number,
          default: 1,
        },
        parentId: {
          type: mongoose.Schema.Types.ObjectId,
          default: null,
        },
        postedDate: { type: Date, default: Date.now },
        author: {
          id: mongoose.Schema.Types.ObjectId,
          authname: {
            type: String,
            default: "Lady Beckett",
          },
          authdp: {
            type: String,
          },
        },
        commentText: {
          type: String,
        },
      },
    ],
  },

  image: {
    dp: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWh_yNBxQVfH0nTGhqA_VrsO1c123fm3Qm99Vk5EEuT51cP_tv4QdobK-jSbj6G-SX5Q&usqp=CAU",
    },
    coverimage: {
      type: String,
      default:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2021/02/social-media-opportunities-601bc9d146e00-760x400.png",
    },
    myuser: {
      dp: {
        type: String,
        default:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWh_yNBxQVfH0nTGhqA_VrsO1c123fm3Qm99Vk5EEuT51cP_tv4QdobK-jSbj6G-SX5Q&usqp=CAU",
      },
      coverimage: {
        type: String,
        default:
          "https://cdn.searchenginejournal.com/wp-content/uploads/2021/02/social-media-opportunities-601bc9d146e00-760x400.png",
      },
    },
  },
});

const MemoModel = mongoose.model("Memoriesdb", MemoriesSchema);
module.exports = MemoModel;
