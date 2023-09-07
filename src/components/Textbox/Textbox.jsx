import React, { useState } from "react";
import { useChatContext } from "../../contexts/ChatContext";

const Textbox = ({ isReply = false, messageId = "" }) => {
  const { handleSendMessage, handleReply } = useChatContext();
  const [newMessage, setNewMessage] = useState("");
  const scrollToView = (type) => {
    const length = document.getElementsByClassName("message-wrapper").length;
    const element =
      type == "reply"
        ? document.getElementsByClassName("message-wrapper")[length - 1]
        : document.querySelector(".thread-container")?.lastElementChild;
    setTimeout(() => {
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };
  const handleTextSend = () => {
    if (isReply) {
      handleReply(messageId, newMessage);
      scrollToView("thread");
    } else {
      handleSendMessage(newMessage);
      scrollToView("reply");
    }
    setNewMessage("");
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleTextSend();
      scrollToView();
    }
  };
  return (
    <div className="textbox-container">
      <input
        type="text"
        value={newMessage}
        placeholder="Type here.."
        className="textbox"
        onKeyDown={(e) => handleEnter(e)}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className="btn" onClick={() => handleTextSend()}>
        Send
      </button>
    </div>
  );
};

export default Textbox;
