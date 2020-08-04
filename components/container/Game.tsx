import React from "react";
import { GameContainer, Numbers, GameList } from "../styled/GameChapters";

export const Game = () => {
  const chapters = {
    1.1: "Er is een spel.",
    1.2: "Het spel is alomtegenwoordig.",
    1.3: "Het spel heeft een doel.",
    1.4: "Het doel van het spel is Éénheid.(Co-creatie)",
  };

  return (

      <GameContainer>
        <h1>
          <span>1.</span>HET SPEL
        </h1>
        <GameList>
          {Object.entries(chapters).map((entry) => {
            const number = entry[0];
            const chapter = entry[1];

            return (
              <div key={number}>
                <Numbers>{number}</Numbers>
                {/* THIS MIGHT BECOME A SWITCH WHEN ACTUAL CHAPTERS OR INTERACTIVITY IS ADDED */}
                {chapter === "Het spel is alomtegenwoordig." ? (
                  <>
                    Het spel is
                    <strong> alomtegenwoordig</strong>
                  </>
                ) : (
                  chapter
                )}
              </div>
            );
          })}
        </GameList>
        <img width="100%" src="./static/Ludoweb.png" alt="web" />
      </GameContainer>

  );
};
