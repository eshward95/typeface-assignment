
## Slackify
This is a simple chat interface inspired by platforms like MS Teams, Slack, and WhatsApp. It allows users to send messages, display them in a chat view, and reply to messages as threads, similar to channels or threads in team collaboration apps.

## Features

- Basic chat UI interface
- Properly designed message component with user identifier, timestamp, and message content
- Working flow for typing and sending messages
- Threaded view for replying to messages

## Technologies Used

- React
- Parcel

Used **parcel** instead of ```create-react-app``` because of less build time and zero configuration.



## Getting Started

To run this locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/eshward95/typeface-assignment.git
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The chat interface should now be running locally at `http://localhost:1234`.

## Implementation Details

### Context Setup

- `ChatContext.js`: This file sets up a React context called `ChatContext`. It provides a `ChatProvider` component to manage the chat state, including messages and threads.

### Sending Messages

- `ChatProvider`: Manages the chat state using the `useState` hook. It includes functions for sending new messages and replying to existing messages. When a message is sent, it updates the `messages` array.

### Replying to Messages

- The threaded view allows users to reply to a specific message by clicking on the "Reply" button associated with that message. It then spawns a threaded view for replying. When a reply is sent, it adds the reply to the respective message thread.
Each message has uniqueID generated.

## Usage

- Type your message in the text field and hit "Send" to add it to the list of displayed messages.
- To reply to a message, click on the "Reply to thread" button on the message you want to respond to. This will spawn a threaded view.
- In the threaded view, you can type your reply and hit "Send" to add it to the thread.

## Project Structure

- `src/components/Message.js`: Defines the message component.
- `src/components/Thread.js`: Defines the threaded view component.
- `src/components/Message.js`: Defines the Message view component.No two different components to handle thread message or default message.
- `src/components/Textbox.js`: Defines the textbox component.Handle send message also scroll to view to last message on each message send.
- `app.js`: Entry point for the application.
- `index.html`: HTML file to render the React app.

## Extending for Group Chat

- **Additional State for Group Messages:**
   Introduce a new state to manage group messages alongside user messages.
   
- **Utilizing "sentBy" Field:**
   Leverage the "sentBy" field within each message object to differentiate between individual messages. This field will contain information about who sent the message.
   
- **Unique Identifier for Each Group:**
   Assign a unique identifier (ID) to each group participating in the chat. This ID will help identify and organize group-specific messages.
   
- **Appending Messages to Group State:**
   When a new message is sent to a group chat, append it to the corresponding group's message state using the group's unique identifier.
   
