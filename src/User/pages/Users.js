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
      places: "1",
    },
    {
      id: "u2",
      name: "Alexander The Great",
      image:
        "https://thornsoftime.files.wordpress.com/2014/04/mosaic-depicting-alexander-in-naples.jpg",
      places: "2",
    },
    {
      id: "u3",
      name: "King Suryavarman II",
      image:
        "https://imgs.search.brave.com/n_XqiOIkI2vVoHLKcFTDuPPcPJXWR80ToCBPb2jDCHo/rs:fit:640:427:1/g:ce/aHR0cDovL3MzLmFt/YXpvbmF3cy5jb20v/czMudGltZXRvYXN0/LmNvbS9wdWJsaWMv/dXBsb2Fkcy9waG90/b3MvNjA2MTk4MS9I/aW5kdS1kZWl0eS1i/YXMtcmVsaWVmLWlu/LWFuZ2tvci5qcGc_/MTQ3NzIyMDg0NA",
      places: "1",
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;