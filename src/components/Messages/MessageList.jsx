import React from "react";
import { useChatContext } from "../../contexts/ChatContext";
import Message from "./Message";

const MessageList = () => {
  const { messages } = useChatContext();

  return (
    <div className="messages">
      {messages?.length > 0 &&
        messages.map(({ id, text, replies, timeStamp, sentBy }) => (
          <Message
            key={id}
            content={text}
            replies={replies}
            timeStamp={timeStamp}
            messageId={id}
            sentBy={sentBy}
          />
        ))}
    </div>
  );
};

export default MessageList;
