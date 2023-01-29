import React from 'react';
import BotCard from './components/BotCard';

const BotCollection = ({ bots }) => {
  return (
    <div>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
};

export default BotCollection;
