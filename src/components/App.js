import React, { useState, useEffect } from 'react';
import BotArmy from './BotArmy';

const App = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  return (
    <div className="App">
      <BotArmy bots={bots} />
    </div>
  );
};

export default App;
