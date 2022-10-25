import React, { useEffect, useState } from "react";
import UserList from "../components/UsersList";
import ErrorModal from "../../Shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";

//TODO: Refactor and create a custom http request hook for this component

/**
 * we want to send a GET request of the users
 * whenever THIS page loads.
 */
const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  // useEffect to prevent infinite loop of fetch request during re-renders
  // NOTE: THE DEFUALT REQUEST TYPE OF FETCH() IS GET
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:5000/api/users");

        // response should be an object with a 'users' key
        // which is an array of users
        const responseData = await response.json();

        if(!response.ok){
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  }

  return(
    <>
    <ErrorModal error={error} onClear={errorHandler}/>
    {isLoading && (
      <div className="center">
        <LoadingSpinner/>
      </div>
    )}
    {!isLoading && loadedUsers && <UserList items={loadedUsers} />}
    </>
  );
};

export default Users;
