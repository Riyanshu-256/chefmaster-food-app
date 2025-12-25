// UserContext => Keep the information of loggedIn User

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
