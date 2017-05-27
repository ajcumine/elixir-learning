import React from 'react';
import ReactDOM from 'react-dom';

import ChatContainer from './components/chat-container';
import MenuContainer from './components/menu-container';

import DATA from './fake-data';

const App = () => {
  const ROOMS = DATA.rooms;
  const MESSAGES = DATA.rooms[0].messages;

  return(
    <div>
      <MenuContainer
        rooms={ROOMS}
      />
      <ChatContainer
        messages={MESSAGES}
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
