/**
 * 1.) Type 'imr' and scroll down for
 * importing React from 'react'.
 *
 * 2.) Type 'imp' and scroll up one and enter
 * for importing things from other modules.
 *
 * 3.) CTRL + ALT + R for React Snippets
 *
 * 4.) CTRL + ALT + K for Bookmark Toggle
 *
 * 5.) INSERT + SHIFT for Word Jumpy
 *
 * 10.) F1 for Command Pallete
 */

import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../Shared/components/UIElements/Card";

const UsersList = (props) => {
  const noUsersJSX = (
    <div className="center">
      <Card>
        <h2>No Users Found. Please Try Again!</h2>
      </Card>
    </div>
  );

  if (props.items.length === 0) {
    return noUsersJSX;
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          // TODO: Skeleton code, need to implement still
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
