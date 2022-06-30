import "./App.css";
import Landing from "./Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { Userprof } from "./components/subcomponents/Userprof";
import Fillinfo from "./components/Fillinfo";
import Profile from "./components/Profile";
import Commentsection from "./components/subcomponents/Commentsection";
import Feed from "./components/Feed";
import { Tobecompleted } from "./components/subcomponents/Tobecompleted";
import Setting from "./components/subcomponents/Setting";
import Updateprofile from "./components/subcomponents/Updateprofile";
import { Deleteprofile } from "./components/subcomponents/Deleteprofile";
import ProtectedRoute from "./utilities/Protectedroute";
import Error from "./components/Error";
import "./config/firebaseconfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  React.useEffect(() => {
    document.title = "Memories";
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="fillinfo" element={<Fillinfo />} />
        <Route path="home" element={<Home />}>
          <Route index element={<Feed />} />
          <Route path=":id" element={<Commentsection />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="userprofile" element={<Userprof />} />
          <Route path="message" element={<Tobecompleted />} />
          <Route path="settings" element={<Setting />}>
            <Route path="update" element={<Updateprofile />} />
            <Route path="delete" element={<Deleteprofile />} />
          </Route>
        </Route>

        <Route path="*" element={<Error errorcode={404} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
