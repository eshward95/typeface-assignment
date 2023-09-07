import { createContext, useContext, useState } from "react";
import { generateUniqueId } from "../helpers/utils";
import user from "./../../dev-data/user.json";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState({});
  const [selectedUser, setSelectedUser] = useState(user[0].id);
  const userList = user;

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === "") return;
    const newMessageObj = {
      text: newMessage,
      timeStamp: Date.now(),
      id: generateUniqueId(),
      replies: [],
      sentBy: userList.find((res) => selectedUser === res.id)?.name,
    };
    const updatedMessage = messages[selectedUser]
      ? {
          ...messages,
          [selectedUser]: [...messages[selectedUser], newMessageObj],
        }
      : { ...messages, [selectedUser]: [newMessageObj] };
    setMessages(updatedMessage);
  };
  const handleReply = (messageIndex, newMessage) => {
    if (newMessage.trim() === "") return;
    const updatedMessages = { ...messages };
    const msgIdx = updatedMessages[selectedUser].findIndex(
      ({ id }) => messageIndex === id
    );
    const newMessageObj = {
      text: newMessage,
      timeStamp: Date.now(),
      id: generateUniqueId(),
      sentBy: userList.find((res) => selectedUser === res.id)?.name,
    };
    updatedMessages[selectedUser][msgIdx].replies.push(newMessageObj);
    setMessages(updatedMessages);
  };
  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
  };
  return (
    <ChatContext.Provider
      value={{
        messages: messages[selectedUser],
        handleSendMessage,
        handleReply,
        handleSelectUser,
        selectedUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export const useChatContext = () => {
  const {
    messages,
    handleSendMessage,
    handleReply,
    handleSelectUser,
    selectedUser,
  } = useContext(ChatContext);
  return {
    messages,
    handleSendMessage,
    handleReply,
    handleSelectUser,
    selectedUser,
  };
};
