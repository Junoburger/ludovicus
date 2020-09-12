import React from "react";
import { ChapterContainer } from "../styled/God";

export const Evil = () => {
  const chapters = {
    11.1: () => {
      return <div>Er is kwaad in het spel. (Het Kwaad)</div>;
    },
    11.2: () => {
      return (
        <div>
          Het Kwaad wil:
          <ul>
            <li>HET SPEL TEGENWERKEN</li>
            <li>VERDELING ZAAIEN</li>
            <li>GEWELD IN DE HAND WERKEN</li>
            <li>ANGST, AGRESSIE, CONFLICT</li>
          </ul>
        </div>
      );
    },
    11.3: () => {
      return (
        <div>
          Het Kwaad wil, dus,in eerste instantie:
          <h2>HET MISVERSTAND BEVORDEREN(zie 10)</h2>
          en daartoe:Vernietiging Zaaien.(‘Het Spel der Vernietiging’)
        </div>
      );
    },
    11.4: () => {
      return (
        <div>
          ‘Het Spel der Vernietiging’ zegt:
          <ol>
            "<li>Er is geen spel.</li>
            <li>Als er een spel zou zijn, had het geen doel.</li>
            <li>Als er een doel zou zijn, dan was het zelfvernietiging.</li>"
          </ol>
          <img width="20%" src="./static/fearlie.png" alt="web" style={{ padding: "5%" }} />
          <img width="20%" src="./static/pyra.png" alt="web" style={{ padding: "5%" }} />
          <img width="100%" src="./static/pyra2.png" alt="web" style={{ paddingTop: "10%" }} />
          <h1>
            Voor een gedetailleerde uitleg over welke structuur het kwaad –inmiddels -heeft
            gecreëerd op Aarde:
          </h1>
          zie:
          <a href="https://www.youtube.com/watch?v=457akZFYnHo&feature=youtu.be&t=1020">
            https://www.youtube.com/watch?v=457akZFYnHo&feature=youtu.be&t=1020
          </a>
        </div>
      );
    },
  };

  return (
    <ChapterContainer>
      <h1>
        <span>11.</span>DE 'DOODDOENER' (HET KWAAD)
      </h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Object.keys(chapters).map((number) => {
            return (
              <div style={{ display: "flex", padding: "2%" }}>
                <div style={{ paddingRight: "5%" }}>{number}</div>
                {chapters[number]()}
              </div>
            );
          })}
        </div>
        <img width="20%" height="25%" src="./static/director.png" alt="web" />
      </div>
    </ChapterContainer>
  );
};
