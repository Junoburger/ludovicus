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

export const RoleDivision = () => {
  return (
    <>
      <RolesContainer>
        <h1>
          <span>4.</span>ROLVERDELING
        </h1>
        <FourOne />
        <FourTwo />
      </RolesContainer>
    </>
  );
};
