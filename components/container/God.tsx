import React from "react";
import { ChapterContainer } from "../styled/God";

const ChaperNineOne = () => {
  return (
    <div>
      9.1 De Éenheid van:
      <ul>
        <li>spel,</li>
        <li>speler(s),</li>
        en
        <li>gespeelde noemen we:</li>
      </ul>
      Het Goede.(Of, meer religieus: God)
    </div>
  );
};

const ChaperNineTwo = () => {
  return (
    <div>
      9.2 Een beweging maken in het spel die het spel dichter bij het doel van het spel brengt
      noemen we een GOEDE DAAD–een daad die verenigd.(zie 1.4)
    </div>
  );
};

export const God = () => {
  return (
    <ChapterContainer>
      <h1>
        <span>9.</span>'GOD' (HET GOEDE)
      </h1>
      <ChaperNineOne />

      <ChaperNineTwo />
    </ChapterContainer>
  );
};
