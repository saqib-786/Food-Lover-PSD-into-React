import React, { useState } from 'react';
import { connect } from 'react-redux';
const Chat = () => {
  // useState hook to manage the state of the chat messages
  const [messages, setMessages] = useState([]);

  // handle new message submission
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh on submit

    // get the message from the input field
    const message = event.target.message.value;

    // add the new message to the list of messages
    setMessages([...messages, message]);

    // reset the input field
    event.target.message.value = '';
  }

  return (
    <div className="chat-container">
      <h2>Chat App</h2>
      {/* display the list of messages */}
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>

      {/* input form for new messages */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Enter your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
const mapStateToProps=(state)=>({

})
export default connect(mapStateToProps,null)(Chat);
