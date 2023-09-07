import React from "react";
import Message from "../Messages/Message";
import Textbox from "../Textbox/Textbox";

const Thread = ({
  replies,
  messageId,
  handleCloseThread,
  drawerVisible = false,
}) => {
  return (
    <div className={`message-thread ${drawerVisible ? "visible" : ""}`}>
      <div className="overlay-container">
        <div className="overlay"></div>
      </div>

      <div className="thread-wrapper">
        <div className="sticky-header">
          <div className="header-left">
            <span className="header-text">Thread</span>
            <span className="header-username">{replies[0]?.sentBy}</span>
          </div>
          <div className="close-icon" onClick={handleCloseThread}>
            &#x2715;
          </div>
        </div>

        <div className="thread-container">
          {replies.length > 0 &&
            replies.map((reply, idx) => (
              <Message
                key={reply.id}
                isReply={true}
                content={reply.text}
                timeStamp={reply.timeStamp}
                replies={[]}
                messageId={reply.id}
                sentBy={reply.sentBy}
              />
            ))}
        </div>
        <Textbox isReply={true} messageId={messageId} />
      </div>
    </div>
  );
};

export default Thread;
