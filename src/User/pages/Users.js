import React from "react";
import UserList from "../components/UsersList";

const Users = () => {
  //! DUMMY Variable, hence it's in all cap.
  //TODO:  Use real user data later.
  const USERS = [
    {
      id: "u1",
      name: "Ahuitzotl",
      image:
        "https://imgs.search.brave.com/UbFktvWhzxI5R3ijqPwpjnmA2DPQrjZ9LjBePzFIpiw/rs:fit:610:709:1/g:ce/aHR0cHM6Ly93d3cu/YW5jaWVudC1vcmln/aW5zLm5ldC9zaXRl/cy9kZWZhdWx0L2Zp/bGVzL3N0eWxlcy9s/YXJnZS9wdWJsaWMv/SHVpdHppbG9wb2No/dGxpLmpwZz9pdG9r/PUpEYVlJVGlp",
      places: "64",
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
