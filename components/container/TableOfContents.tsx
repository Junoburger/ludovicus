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
              1.
              <span>HET SPEL</span>
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <i>DE WERKING VAN HET SPEL: ESSENTIËLE ASPECTEN</i>
            <ContentOption>
              2.
              <span>SPEELSTIJLEN</span>
            </ContentOption>
            <ContentOption>
              3.
              <span>SPEELMODI</span>
            </ContentOption>
            <ContentOption>
              4.
              <span>ROLVERDELING</span>
            </ContentOption>
            <ContentOption>
              5.
              <span>SPEELRICHTINGEN</span>
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <i>DE WERKING VAN HET SPEL: EXISTENTIËLE ASPECTEN</i>
            <ContentOption>
              6.<span>SPEELSTIJLEN(2)</span>
            </ContentOption>
            <ContentOption>
              7.<span>SPEELMODI(2)</span>
            </ContentOption>
            <ContentOption>
              8.<span>ROLVERDELING(2)</span>
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <i>HET VERHAAL. . .</i>
            <ContentOption>
              9. <span>‘GOD’(HET GOEDE)</span>
            </ContentOption>
            <ContentOption>
              10. <span>HET ‘MISVERSTAND’(DE HEL)</span>
            </ContentOption>
            <ContentOption>
              11.<span>DE ‘DOODDOENER’(HET KWAAD)</span>
            </ContentOption>
            <ContentOption>
              12.<span>DEUGDEN EN ZONDEN</span>
            </ContentOption>
            <ContentOption>
              13.<span>HET BOEK DER SPREUKEN</span>
            </ContentOption>
          </h3>
        </ContentOptions>
        <ContentOptions>
          <h3>
            <ContentOption>
              ?.<span>HET VRAAGTEKEN OP HET EIND</span>
            </ContentOption>
          </h3>
        </ContentOptions>
      </Contents>
    </>
  );
};
