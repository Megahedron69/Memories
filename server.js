require("dotenv").config({ path: "config.env" });
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const MemoModel = require("./Models/Memoriesmodel");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const currdir = path.join(__dirname, "/");
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const CreateMemoriesdb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      dbName: "Memories",
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch {
    console.log("Failed to connect to database");
  }
};
CreateMemoriesdb();
//displays all data
app.get("/api/posts", async (req, res, next) => {
  const memdata = await MemoModel.find({});
  try {
    res.send(memdata);
  } catch (err) {
    console.log("cannot reach getdata api");
    next(err);
  }
});
//find post by id
app.get("/api/posts/:ed", async (req, res, next) => {
  const id = req.params.ed;
  const founddata = await MemoModel.findById(id);
  try {
    res.json(founddata);
  } catch (err) {
    console.log("cannot reach comment data");
    err.type = "redirect";
    next(err);
  }
});
//Creates new post
app.post("/api/posts/newpost", async (req, res, next) => {
  try {
    const newmem = new MemoModel({
      posts: {
        posttitle: req.body.posttext,
        postcontent: req.body.postimage,
      },
      name: {
        username: req.body.username,
      },
      image: {
        dp: req.body.userdp,
      },
    });
    await newmem.save();
  } catch (err) {
    next(err);
  }
});
//Updates comment list by Creating new comment
app.put("/api/posts/:ed", async (req, res, next) => {
  try {
    const id = req.params.ed;
    const ob = {
      commentText: req.body.commenttext,
      author: {
        authname: req.body.authname,
        authdp: req.body.authdp,
      },
    };
    const updatecommentlist = await MemoModel.findByIdAndUpdate(
      id,
      { $push: { "posts.Comments": ob } },
      {
        new: true,
      }
    );
  } catch (err) {
    next(err);
  }
});
//deletes post by id
app.delete("/api/posts/:id", async (req, res, next) => {
  const { id } = req.params;
  await MemoModel.findByIdAndDelete(id);
  try {
    console.log("post deleted");
  } catch (err) {
    next(err);
  }
});

function errorLogger(error, req, res, next) {
  // for logging errors
  console.error(error); // or using any fancy logging library
  next(error); // forward to next middleware
}

function errorResponder(error, req, res, next) {
  // responding to client
  if (error.type == "redirect") res.redirect("*");
  else if (error.type == "time-out")
    // arbitrary condition check
    res.status(408).send(error);
  else next(error); // forwarding exceptional case to fail-safe middleware
}

function failSafeHandler(error, req, res, next) {
  // generic handler
  res.status(500).send(error);
}
app.use((error, req, res, next) => {
  console.log("Error Handling Middleware called");
  console.log("Path: ", req.path);
  next();
});
app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/memories/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "memories", "build", "index.html"));
  });
} else {
  app.get("*", (req, res) => {
    res.send("API RUNNING");
  });
}
app.listen(PORT, () => {
  console.log(`all hands on port${PORT}`);
});
