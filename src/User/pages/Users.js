import React, { useEffect, useState } from "react";
import UserList from "../components/UsersList";
import ErrorModal from "../../Shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../Shared/Hooks/http-hook";

/**
 * we want to send a GET request of the users
 * whenever THIS page loads.
 */
const Users = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  // useEffect to prevent infinite loop of fetch request during re-renders
  // NOTE: THE DEFUALT REQUEST TYPE OF FETCH() IS GET
  useEffect(() => {
    const fetchUsers = async () => {

      try {
        // only needs url in this case: httpHook has default parameters for GET requests 
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/users");

        setLoadedUsers(responseData.users);
      } catch (err) {
      }
    };

    fetchUsers();
  }, [sendRequest]);

  return(
    <>
    <ErrorModal error={error} onClear={clearError}/>
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
