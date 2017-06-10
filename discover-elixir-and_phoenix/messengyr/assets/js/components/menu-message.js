import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

export default class MenuMessage extends React.Component {
  render() {
    const room = this.props.room;
    const counterpart = room.counterpart;
    const lastMessage = room.messages.slice(-1)[0];
    const sentAt = moment.utc(lastMessage.sentAt).fromNow();

    return (
      <li>
        <img className='avatar' src={counterpart.avatarUrl}/>
        <div className='profile-container'>
          <p className='name'>{counterpart.username}</p>
          <date>{sentAt}</date>
          <p className='message'>{lastMessage.text}</p>
        </div>
      </li>
    )
  }
}
