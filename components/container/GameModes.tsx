import React from "react";
import { ModiContainer, Gridlist, Modi } from "../styled/GameModes";

const ThreeOne = () => {
  return (
    <>
      3.1 Er zijn meerdere speelmodi, namelijk:
      <Gridlist>
        <ul>
          <li>
            <Modi>acteur</Modi>
            <span>(speler van het spel)</span>
            <span>(a)</span>
          </li>
          <li>
            <Modi>regisseur</Modi>
            <span>(bestuurder van het spel)</span>
            <span>(r)</span>
          </li>
          <li>
            <Modi>toeschouwer</Modi>
            <span>(getuige van het spel)</span>
            <span>(t)</span>
          </li>
          <li>
            <Modi>producent</Modi>
            <span>(dienaar van het spel)</span>
            <span>(p)</span>
          </li>
        </ul>
      </Gridlist>
    </>
  );
};

export const GameModes = () => {
  return (
    <ModiContainer>
      <h1>
        <span>3.</span>SPEELMODI
      </h1>
      <ThreeOne />
    </ModiContainer>
  );
};
