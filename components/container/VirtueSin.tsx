import React from "react";
import { ChapterContainer } from "../styled/God";

export const VirtueSin = () => {
  const chapters = {
    12.1: () => {
      return (
        <div>
          Een DEUGD is een GOEDE DAAD. (zie 9.2)Een ZONDE is een daad die een DEUGD had kunnen
          zijnmaar dat niet was
          <i>(Je hebt het ‘laten liggen’, ‘weggegooid’...)</i>
        </div>
      );
    },
  };
  return (
    <ChapterContainer>
      <h1>
        <span>12.</span>DEUGDEN EN ZONDEN
      </h1>
      {Object.keys(chapters).map((number) => {
        return (
          <div style={{ display: "flex", padding: "2%" }}>
            <div style={{ paddingRight: "5%" }}>{number}</div>
            {chapters[number]()}
          </div>
        );
      })}
      <img width="20%" height="25%" src="./static/appi.png" alt="web" />
    </ChapterContainer>
  );
};
