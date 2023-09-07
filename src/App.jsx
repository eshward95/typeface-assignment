import React from "react";
import MessageList from "./components/Messages/MessageList";
import Textbox from "./components/Textbox/Textbox";
import UserList from "./components/Userlist/UserList";
import { ChatProvider } from "./contexts/ChatContext";

const App = () => {
  return (
    <ChatProvider>
      <div className="container">
        <header className="chat-header">
          <h1>
            <i className="fas fa-smile"></i> Slackify
          </h1>
        </header>
        <div className="chat-container">
          <div className="sidebar">
            <UserList />
          </div>
          <div className="message-container">
            <MessageList />
            <Textbox />
          </div>
        </div>
      </div>
      {/* <h1>Working</h1> */}
    </ChatProvider>
  );
};

export default App;
