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

const Six = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        6.1
        <span>
          Speelstijlen
          <strong>
            <i> zijn </i>
          </strong>
          te herleiden tot een (accent op een) speelmodus of relatie tussen speelmodi.
          <br />
          <br />
          (Dergelijke bepalingen zijn onderhevig aan interpretatie.)
          <br />
          <br />
        </span>
      </div>
      <div style={{ display: "flex" }}>
        6.2
        <span>
          Interpretatiesvan speelstijlenen de speelmodus waarop het accent ligt–vanuit de alledaagse
          werkelijkheid bezien:
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        (1) <span>De alledaagse werkelijkheid:</span>
        <ul>
          <li>toeschouwer</li>
        </ul>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        (2) <span>De werksituatie(repetitietijd):</span>
        <ul>
          <li>acteur</li>
          <li>toeschouwer</li>
          <li>regisseur</li>
        </ul>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        (3) <span>De voorstelling(HET VERHAAL):</span>
        <ul>
          <li>acteur</li>
        </ul>
      </div>
      <img src="./static/triangle.png" width="100%" />
      <div style={{ display: "flex" }}>
        6.3
        <span>
          Speelstijlen
          <strong>
            <i> zijn </i>
          </strong>
          te herleiden tot een (accent op een) rol of relatie tussen rollen.
          <br />
          <br />
          (Dergelijke bepalingen zijn onderhevig aan interpretatie.)
          <br />
          <br />
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        (1) <span>De alledaagse werkelijkheid:</span>
        <ul>
          <li>bijrollen</li>
          <li>figuranten</li>
        </ul>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        (2) <span>De werksituatie (repetitietijd):</span>
        <ul>
          <li>tritagonisten</li>
        </ul>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        (3) <span>De voorsteling (HET VERHAAL):</span>
        <ul>
          <li>protagonisten</li>
          <li>antagonisten</li>
        </ul>
      </div>
    </>
  );
};

export const PlayStyles = ({ ...props }) => {
  return (
    <PlayStylesContainer>
      {!props.second ? (
        <>
          <h1>
            <span>2.</span>SPEELSTIJLEN
          </h1>
          <TwoOne />
          <TwoTwo />
          <TwoThree />
        </>
      ) : (
        <>
          <h1>
            <span>6.</span>SPEELSTIJLEN (2)
          </h1>
          <Six />
        </>
      )}
    </PlayStylesContainer>
  );
};
