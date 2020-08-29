import React from "react";
import { RolesContainer, Roleslist, Role } from "../styled/RoleDivision";

const FourOne = () => {
  return (
    <>
      4.1 Er zijn meerdere soorten rollen te spelen:
      <Roleslist>
        <ul>
          <li>
            <Role>Protagonist</Role>
            <span>(hoofdrol)</span>
            <span>(Pr)</span>
          </li>
          <li>
            <Role>Antagonist</Role>
            <span>('tegenhanger' van de hoofdrol)</span>
            <span>(An)</span>
          </li>
          <li>
            <Role>Tritagonist</Role>
            <span>(belangrijke rol, maar niet Prof An)</span>
            <span>(Tr)</span>
          </li>
          <li>
            <Role>Bijrol</Role>
            <span>(onbelangrijke rol)</span>
            <span>(B)</span>
          </li>
          <li>
            <Role>Figurant</Role>
            <span>(onbelangrijke rol zonder tekst)</span>
            <span>(F)</span>
          </li>
        </ul>
      </Roleslist>
    </>
  );
};

const FourTwo = () => {
  return (
    <>
      4.2 Niet elke rol heeft dezelfde omvang:
      <Roleslist>
        <ul>
          <li>
            <Role>Pr en An zijn</Role>
            <span>'grootse' rollen</span>
          </li>
          <li>
            <Role>Tr is een</Role>
            <span>'middelmatige' rol</span>
          </li>
          <li>
            <Role>B en F zijn</Role>
            <span>'nederige' rollen</span>
          </li>
        </ul>
      </Roleslist>
    </>
  );
};

const EightOne = () => {
  return (
    <>
      <div>
        8.1 &nbsp; Een rol in een bepaalde speelmodus &nbsp;
        <strong>
          <i>is</i>
        </strong>
        &nbsp; een ('nieuwe') rol:
      </div>
      <ul>
        <div style={{ display: "flex" }}>
          <li>Zelfbewuste Protagonist</li>
          <span style={{ marginLeft: "5%" }}>(zbs) + (Pr)= (ZbPr)</span>
        </div>
        <div style={{ display: "flex" }}>
          <li>Zelfbewuste Antagonist</li>
          <span style={{ marginLeft: "5%" }}>(zbs) + (An) = (ZbAn)</span>
        </div>
        <div style={{ display: "flex" }}>
          <li>Zelfbewuste Tritagonist</li>
          <span style={{ marginLeft: "5%" }}>(zbs) + (Tr)= (ZbTr)</span>
        </div>
        <div style={{ display: "flex" }}>
          <li>Zelfbewuste Bijrol</li>
          <span style={{ marginLeft: "5%" }}>(zbs) + (B) = (ZbB)</span>
        </div>
        <div style={{ display: "flex" }}>
          <li>Zelfbewuste Figurant</li>
          <span style={{ marginLeft: "5%" }}>(zbs) + (F)= (ZbF)</span>
        </div>
      </ul>
    </>
  );
};

const EightTwo = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        8.2 &nbsp;
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            ONTWAKEN: (ZbF) {">"} (ZbB) {">"} (ZbTr) {">"} (ZbAn) {">"} (ZbPr)
          </span>
          <span>
            INDOEZELEN: (ZbPr){">"}
            (ZbAn) {">"} (ZbTr) {">"} (ZbB) {">"} (ZbF)
          </span>
        </div>
      </div>
    </>
  );
};

const ChapterEight = () => {
  return (
    <>
      <h1>
        <span>8.</span>ROLVERDELING (2)
      </h1>
      <EightOne />
      <EightTwo />
    </>
  );
};

export const RoleDivision = ({ ...props }) => {
  return (
    <>
      <RolesContainer>
        {!props.second ? (
          <>
            <h1>
              <span>4.</span>ROLVERDELING
            </h1>
            <FourOne />
            <FourTwo />
          </>
        ) : (
          <ChapterEight />
        )}
      </RolesContainer>
    </>
  );
};
