import React from "react";

import { useAuthStatus } from "./customhook";

import Home from "../components/Home";
import Error from "../components/Error";

const ProtectedRoute = ({ component: Component }) => {
  // a custom hook to keep track of user's auth status
  const { loggedIn, checkingStatus } = useAuthStatus();

  return (
    <>
      {loggedIn ? (
        // if user is logged in, grant the access to the route
        // note: in this example component is Bar
        <Home />
      ) : (
        // else render an unauthorised component
        // stating the reason why it cannot access the route
        <Error errorcode={403} />
      )}
    </>
  );
};

export default ProtectedRoute;
