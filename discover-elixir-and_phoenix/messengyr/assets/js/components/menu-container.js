import React from 'react';
import ReactDOM from 'react-dom';

import MenuMessage from './menu-message';

export default class MenuContainer extends React.Component {
  render() {

    const rooms = this.props.rooms.map((room) => (
      <MenuMessage
        key={room.id}
        room={room}
      />
    ))

    return (
      <div className='menu'>
        <div className='header'>
          <h3>Messages</h3>
          <button className='compose'></button>
        </div>

        <ul>
          {rooms}
        </ul>
      </div>
    )
  }
}
