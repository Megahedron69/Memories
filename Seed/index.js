equire("dotenv").config({ path: "../config.env" });
const mongoose = require("mongoose");
const MemoModel = require("../Models/Memoriesmodel");
const countryarr = ["India", "Canada", "Mexico"];
const axios = require("axios");
const CreateMemoriesdb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Database Connected");
  } catch {
    console.log("Failed to connect to database");
  }
};
CreateMemoriesdb();

const seeddata = async () => {
  const userdata = await axios.get("https://randomuser.me/api/?results=29");
  const imagedat = await axios.get(
    "https://api.unsplash.com/photos/random/?count=29&client_id=GWDzPpjHk743C2QnVBRxu8PtmOI3npF5sePZZ7o0pg4"
  );
  const commentdat = await axios.get(
    "https://fakerapi.it/api/v1/texts?_quantity=29&_characters=250"
  );

  try {
    await MemoModel.deleteMany({});
    const userarr = await userdata.data;
    const imagedata = await imagedat.data;
    const commentdata = await commentdat.data.data;
    for (let i = 0; i <= 29; i++) {
      const data = new MemoModel({
        name: {
          firstname: `${userarr.results[i].name.first}`,
          lastname: `${userarr.results[i].name.last}`,
          username: `${userarr.results[i].login.username}`,
        },
        about: {
          user: `${userarr.results[i].gender} aged ${userarr.results[i].dob.age}. Rotting here for ${userarr.results[i].registered.age} `,
        },
        location: {
          country: `${
            countryarr[Math.floor(Math.random() * countryarr.length)]
          }`,
          state: `${userarr.results[i].location.state}`,
          city: `${userarr.results[i].location.city}`,
          address: `${userarr.results[i].location.street.name} ,${userarr.results[i].location.street.number}`,
          zipcode: `${userarr.results[i].location.postcode}`,
        },
        email: {
          user: `${userarr.results[i].email}`,
        },
        image: {
          dp: `${userarr.results[i].picture.large}`,
          coverimage: "https://source.unsplash.com/random/?mountains",
        },
        posts: {
          postno: i,
          posttitle: `${imagedata[i].description}`,
          postcontent: `${imagedata[i].urls.regular}`,
          postlikesno: imagedata[i].likes,
          postcommentno: imagedata[i].width,
          Comments: [
            {
              postId: i,
              depth: 1,
              author: {
                authname: `${commentdata[i].author}`,
                authdp: `https://i.pravatar.cc/150?img=${i}`,
              },
              commentText: `${commentdata[i].content}`,
            },
          ],
        },
      });
      await data.save();
    }
  } catch (err) {
    console.error(err);
  }
};
seeddata().then(() => {
  mongoose.connection.close();
});
