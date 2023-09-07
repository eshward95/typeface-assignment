import React, { useState } from "react";
import { getHumanReadableTime } from "../../helpers/utils";
import Thread from "../Threads/Threads";

const Message = ({
  content = "",
  replies = [],
  timeStamp = "",
  messageId = "",
  isReply = false,
  sentBy = "",
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <div className="message-wrapper">
      <div className="message-header">
        <div className="name">{sentBy}</div>
        {!isReply && (
          <div
            className="reply-visible"
            onClick={() => !isReply && setDrawerVisible(!drawerVisible)}
          >
            Reply in thread
          </div>
        )}
      </div>

      <div
        className={`message ${isReply ? "" : "cursor--pointer"}`}
        onClick={() => !isReply && setDrawerVisible(!drawerVisible)}
      >
        <span>{content}</span>
      </div>
      <span className="timestamp">{getHumanReadableTime(timeStamp)}</span>
      {drawerVisible && (
        <Thread
          drawerVisible={drawerVisible}
          handleCloseThread={() => setDrawerVisible(false)}
          replies={replies}
          messageId={messageId}
        />
      )}
    </div>
  );
};

export default Message;
