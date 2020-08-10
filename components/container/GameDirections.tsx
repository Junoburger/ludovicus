import React from "react";
import {
  DirectionsContainer,
  Directionslist,
  Direction,
  DirectionAction,
} from "../styled/GameDirections";

const FiveOne = () => {
  return (
    <>
      5.1 'Je hebt spelen en spelen'
      <Directionslist>
        <ul>
          <li>
            <Direction>
              spelen <i>zonder meer</i>:
            </Direction>
            <span>doen waar je zin in hebt</span>
          </li>
          <li>
            <Direction>
              <i>speelser</i>-spelen:
            </Direction>
            <span>spelen volgens 1.1 & 1.2</span>
          </li>
          <li>
            <Direction>
              <i>mede</i>-spelen:
            </Direction>
            <span>spelen volgens 1.3 & 1.4</span>
          </li>
          <li>
            <Direction>
              <i>filosofisch</i> spelen:
            </Direction>
            <span>
              het spel <i>duiden</i>
              <span style={{ fontSize: "6pt" }}> (tijdens het spel)</span>
            </span>
          </li>
          <li>
            <Direction>
              (<strong>jezelf</strong>)<i> buitenspel</i> zetten:
            </Direction>
            <span>spelen 'dat er geen spel is'</span>
          </li>
        </ul>
      </Directionslist>
    </>
  );
};

const FiveTwo = () => {
  return (
    <>
      <Directionslist style={{ display: "flex" }}>
        5.2
        <div style={{ display: "flex", flexDirection: "column", margin: "-4px 0 0 25px" }}>
          <DirectionAction>ONTWAKEN</DirectionAction>
          <span>
            De bewegingvan zelf-onbewuste naar(meer)zelfbewuste speler(Of, althans: de ervaring
            ervan)
          </span>
          <DirectionAction>INDOEZELEN</DirectionAction>
          <span>
            De beweging van zelfbewuste naar (meer) zelf-onbewuste speler (Of, althans: dergelijk
            gedrag vertonen)
          </span>
        </div>
      </Directionslist>
    </>
  );
};

export const GameDirections = () => {
  return (
    <>
      <DirectionsContainer>
        <h1>
          <span>5.</span>SPEELRICHTINGEN
        </h1>
        <FiveOne />
        <FiveTwo />
      </DirectionsContainer>
    </>
  );
};
