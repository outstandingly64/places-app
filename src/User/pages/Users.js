import React from "react";
import UserList from "../components/UsersList";
import {DUMMY_USERS} from '../../Shared/DUMMY/dummy-objects';

const Users = () => {

  return <UserList items={DUMMY_USERS} />;
};

export default Users;