import React from "react";
import { Contents, ContentOptions, ContentOption } from "../styled/TableOfContents";

export const TableOfContents = () => {
  return (
    <>
      <Contents>
        <h1>INHOUDSOPGAVE</h1>
        <ContentOptions>
          <h3>
            <i>DE KERN</i>
            <ContentOption>
              <span>1.</span>
              HET SPEL
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <i>DE WERKING VAN HET SPEL: ESSENTIËLE ASPECTEN</i>
            <ContentOption>
              <span>2.</span> SPEELSTIJLEN
            </ContentOption>
            <ContentOption>
              <span>3.</span> SPEELMODI
            </ContentOption>
            <ContentOption>
              <span>4.</span> ROLVERDELING
            </ContentOption>
            <ContentOption>
              <span>5.</span> SPEELRICHTINGEN
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <i>DE WERKING VAN HET SPEL: EXISTENTIËLE ASPECTEN</i>
            <ContentOption>
              <span>6.</span> SPEELSTIJLEN(2)
            </ContentOption>
            <ContentOption>
              <span>7.</span> SPEELMODI(2)
            </ContentOption>
            <ContentOption>
              <span>8.</span> ROLVERDELING(2)
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <i>HET VERHAAL. . .</i>
            <ContentOption>
              <span>9.</span> ‘GOD’(HET GOEDE)
            </ContentOption>
            <ContentOption>
              <span>10.</span> HET ‘MISVERSTAND’(DE HEL)
            </ContentOption>
            <ContentOption>
              <span>11.</span> DE ‘DOODDOENER’(HET KWAAD)
            </ContentOption>
            <ContentOption>
              <span>12.</span> DEUGDEN EN ZONDEN
            </ContentOption>
            <ContentOption>
              <span>13.</span> HET BOEK DER SPREUKEN
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <ContentOption>
              <span>?.</span> HET VRAAGTEKEN OP HET EIND
            </ContentOption>
          </h3>
        </ContentOptions>
      </Contents>
    </>
  );
};
