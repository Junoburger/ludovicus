import React from "react";
import { ChapterContainer } from "../styled/God";

const ChaperNineOne = () => {
  return (
    <div style={{ padding: "20px" }}>
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
    <div style={{ padding: "20px" }}>
      9.2 Een beweging maken in het spel die het spel dichter bij het doel van het spel brengt
      noemen we een GOEDE DAAD–een daad die verenigd.(zie 1.4)
    </div>
  );
};

const ChapterNineThree = () => {
  return (
    <div style={{ padding: "20px" }}>
      9.3 Het Goede ishet doel van het spel. (zie 1.4) <br />
      Het Goede van het spel is:
      <ul>
        <li>dat het een doel heeft(zie 1.3)</li>
        <li>dat het alomtegenwoordig is.(zie 1.2)</li>
      </ul>
      Het spel <i>is</i> Het Goede. / Het spel is <i>iets</i> goeds.(zie 1.1)
    </div>
  );
};

const ChapterNineFour = () => {
  return (
    <div style={{ padding: "20px" }}>
      9.4 ‘Het Goede’ / ‘de Natuur’ / ‘Zelf’ / ‘het Leven’ zijn allemaal synoniemen voor het doel
      van het spel.
    </div>
  );
};

const ChapterNineFive = () => {
  return (
    <div style={{ padding: "20px", display: "flex" }}>
      9.5 &nbsp;
      <strong>
        Het is goed om ‘mijn’ zelf en‘jouw’ zelf als van nature éénen dezelfde te herkennen.
      </strong>
      &nbsp;
      <img width="40%" src="./static/goldenRule.png" alt="web" />
    </div>
  );
};

const ChapterNineSix = () => {
  return (
    <div style={{ padding: "20px" }}>
      9.6 Ik ben van nature ‘God’.
      <br /> Jij bent van nature ‘God’.
      <br /> Wij zijn allen, tezamen, van nature Goddelijk. <br />(
      <a href="https://en.wikipedia.org/wiki/Process_theology" style={{ fontSize: "8pt" }}>
        https://en.wikipedia.org/wiki/Process_theology
      </a>
      )
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
      <ChapterNineThree />
      <ChapterNineFour />
      <ChapterNineFive />
      <ChapterNineSix />
    </ChapterContainer>
  );
};
