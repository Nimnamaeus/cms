// GameContext.js
import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [purchasedGames, setPurchasedGames] = useState([]);

  const addPurchasedGame = (game) => {
    setPurchasedGames((prevPurchasedGames) => [...prevPurchasedGames, game]);
  };

  return (
    <GameContext.Provider value={{ purchasedGames, addPurchasedGame }}>
      {children}
    </GameContext.Provider>
  );
};
