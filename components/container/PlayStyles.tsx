import React from "react";
import { PlayStylesContainer } from "../styled/PlayingStyles";

const TwoOne = () => {
  return (
    <>
      2.1 Er zijn meerdere speelstijlen, namelijk:
      <ul>
        <li>de alledaagse werkelijkheid</li>
        <li>de werksituatie (repetitietijd)</li>
        <li>de voorstelling (uitvoering: HET VERHAAL)</li>
      </ul>
    </>
  );
};
const TwoTwo = () => {
  return (
    <>
      2.2 In termen van ‘het spelen van het spel’:
      <ul>
        <li>item 1</li>
      </ul>
    </>
  );
};

export const PlayStyles = () => {
  return (
    <PlayStylesContainer>
      <h1>
        <span>2.</span>SPEELSTIJLEN
      </h1>
      <TwoOne />
      <TwoTwo />
    </PlayStylesContainer>
  );
};
