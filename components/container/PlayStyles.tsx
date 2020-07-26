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
        <li>zelf-onbewust spelen (spelen,alsof er geen spel is)</li>
        <li>semi-bewust spelen (spelen, alsof er soms gespeeld wordt)</li>
        <li>
          zelfbewust spelen (spelen, wetende dat er gespeeld wordt en dat het onmogelijk is buiten
          het spel te treden –zie 1.2)
        </li>
      </ul>
    </>
  );
};

const TwoThree = () => {
  return (
    <>
      2.3 Ik hanteer –ten faveure van het spel en het bereiken van het doel van het spel
      <br /> –enkel speelstijl 3. (–zie 1.4)
      <br />
      (De andere speelstijlen worden –zo te zeggen –doorspeelstijl 3 ‘opgeslokt’.)
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
      <TwoThree />
    </PlayStylesContainer>
  );
};
