import React from "react";
import { ChapterContainer } from "../styled/God";

export const BookOfSpells = () => {
  return (
    <ChapterContainer>
      <h1>
        <span>13.</span>BOEK DER SPREUKEN
      </h1>
      <i>
        In navolging van ‘De Boeken der Spreuken’ van G.J.P.J. Bolland...
        <br />
        <a href="https://www.dbnl.org/arch/boll004debo01_01/pag/boll004debo01_01.pdf">
          https://www.dbnl.org/arch/boll004debo01_01/pag/boll004debo01_01.pdf
        </a>
      </i>
      <i>...hier een verzamelplaats van spreuken.</i>
      <ol>
        <li>Waar de humor is, is het kwaad niet.</li>
        <li>Onwetendheid is geen zonde. (Maar leidt wel tot zonde!)</li>
        <li> In de naam der liefde, bestaan geen excuses.</li>
        <li>We moeten het met elkaar doen.</li>
      </ol>
    </ChapterContainer>
  );
};
