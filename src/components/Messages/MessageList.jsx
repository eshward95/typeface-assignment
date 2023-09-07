import React from "react";
import { useChatContext } from "../../contexts/ChatContext";
import Message from "./Message";

const MessageList = () => {
  const { messages } = useChatContext();

  return (
    <div className="messages">
      {messages?.length > 0 &&
        messages.map((res, idx) => (
          <Message
            key={res.id}
            content={res.text}
            replies={res.replies}
            timeStamp={res.timeStamp}
            messageId={res.id}
            sentBy={res.sentBy}
          />
        ))}
    </div>
  );
};

export default MessageList;
