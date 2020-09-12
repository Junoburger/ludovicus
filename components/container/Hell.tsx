import React from "react";
import { ChapterContainer } from "../styled/God";

export const Hell = () => {
  const chapters = {
    10.1: () => {
      return <div>Er is een GROOT misverstand in het spel.</div>;
    },
    10.2: () => {
      return (
        <div>
          Het misverstand is: <strong>de Illusie van Gescheidenheid.</strong>
          <div style={{ padding: "20px" }}>WANT:</div>
        </div>
      );
    },
    10.3: () => {
      return (
        <div>
          We zijn allen, bladeren van één en dezelfde boom. (
          <a href="https://commons.wikimedia.org/wiki/Category:Tree_of_life">
            De ‘Boom des Levens’
          </a>
          )
        </div>
      );
    },
    10.4: () => {
      return <div>We kunnen onszelf wel onderscheiden, maar nooit scheiden.</div>;
    },
    10.5: () => {
      return (
        <div>
          We <strong>ZIJN NIET</strong>
          <i>
            <u> ver-deeld</u>
          </i>
          , enkel
          <i>
            <u>verschillend.</u>
          </i>
          <br /> <i> Verschil mag er zijn !</i>
        </div>
      );
    },
  };

  return (
    <ChapterContainer>
      <h1>
        <span>10.</span>HET 'MISVERSTAND' (DE HEL)
      </h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <i>Our separation from eachother is anoptical illusion of consciousness.”</i>
          –Albert Einstein
        </div>
        <img width="20%" src="./static/spacy.png" alt="web" />
      </div>
      {Object.keys(chapters).map((number) => {
        return (
          <div style={{ display: "flex", padding: "2%" }}>
            <div style={{ paddingRight: "5%" }}>{number}</div>
            {chapters[number]()}
          </div>
        );
      })}
      <img width="50%" src="./static/treeOfLife.png" alt="web" />
      <br />
      <i>
        De Natuur is van Nature:
        <br />
        <strong>Eenheid in Diversiteit& Diversiteit in Eenheid</strong>
        <br />
        De Natuur is van Nature Goed.
      </i>
    </ChapterContainer>
  );
};
