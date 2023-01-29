import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots }) => {
  return (
    <div className="BotCollection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
};

export default BotCollection;
