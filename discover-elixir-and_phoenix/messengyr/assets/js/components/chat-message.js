import React from 'react';
import ReactDOM from 'react-dom';

export default class ChatMessage extends React.Component {
  render() {
    const message = this.props.message;
    const messageClass = (message.outgoing) ? 'user' : 'counterpart';

    return (
      <li className={messageClass}>
        <p>
          {message.text}
        </p>
      </li>
    )
  }
}
