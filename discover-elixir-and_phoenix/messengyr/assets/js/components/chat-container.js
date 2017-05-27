import React from 'react';
import ReactDOM from 'react-dom';

import ChatMessage from './chat-message';

export default class ChatContainer extends React.Component {
  render() {
    const messages = this.props.messages.map((message) => (
      <ChatMessage
        key={message.id}
        message={message}
      />
    ));
    return (
      <div className='chat'>
        <ul>{messages}</ul>

        <div className='compose-box'>
          <input placeholder='Type a message...' />
          <button>Send</button>
        </div>
      </div>
    )
  }
}