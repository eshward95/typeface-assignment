import React from "react";
import { useChatContext } from "../../contexts/ChatContext";
import user from "./../../../dev-data/user.json";
const UserList = () => {
  const { handleSelectUser, selectedUser } = useChatContext();
  return (
    <div>
      {user.map(({ name, id }) => (
        <h3
          key={id}
          className={`user-name ${selectedUser == id ? "selected" : ""} `}
          id={id}
          onClick={() => handleSelectUser(id)}
        >
          {name}
        </h3>
      ))}
    </div>
  );
};

export default UserList;
