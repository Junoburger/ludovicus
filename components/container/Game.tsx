import React from "react";
import { GameContainer, Chapter, Numbers, GameList, Chapters } from "../styled/GameChapters";

export const Game = () => {
  const numbers = [1.1, 1.2, 1.3, 1.4];

  return (
    <>
      <GameContainer>
        <h1>
          <span>1.</span>HET SPEL
        </h1>
        <GameList>
          <Numbers>
            {numbers.map((num) => (
              <span key={num}>{num}</span>
            ))}
          </Numbers>
          <Chapters>
            <Chapter>Er is een spel.</Chapter>
            <Chapter>
              Het spel is <strong>alomtegenwoordig</strong>.
            </Chapter>
            <Chapter>Het spel heeft een doel.</Chapter>
            <Chapter>Het doel van het spel is Éénheid.(Co-creatie)</Chapter>
          </Chapters>
        </GameList>
        <img src="./static/Ludoweb.png" alt="web" />
      </GameContainer>
    </>
  );
};
