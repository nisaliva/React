import React from 'react';
import './App.css';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import Counter from './counter/Counter';

import delivery from './f-delivery.png';
import coin from './coin.png';
import chat from './chat.png';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="container">
        <Guarantee
          img={delivery}
          title="Free shipping"
          description="Description about free shipping"
        />
        <Guarantee
          img={coin}
          title="100% Money back"
          description="Description about how to get money back"
        />
        <Guarantee
          img={chat}
          title="Online support 24/7"
          description="Description about online support"
        />
      </div>
      <Counter />
    </div>
  );
}

export default App;
