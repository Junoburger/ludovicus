import React from "react";
import {
  ModiContainer,
  Gridlist,
  Modi,
  ImageContainer,
  ChapterContainer,
} from "../styled/GameModes";

const ThreeOne = () => {
  return (
    <>
      3.1 Er zijn meerdere speelmodi, namelijk:
      <Gridlist>
        <ul>
          <li>
            <Modi>acteur</Modi>
            <span>(speler van het spel)</span>
            <span>(a)</span>
          </li>
          <li>
            <Modi>regisseur</Modi>
            <span>(bestuurder van het spel)</span>
            <span>(r)</span>
          </li>
          <li>
            <Modi>toeschouwer</Modi>
            <span>(getuige van het spel)</span>
            <span>(t)</span>
          </li>
          <li>
            <Modi>producent</Modi>
            <span>(dienaar van het spel)</span>
            <span>(p)</span>
          </li>
        </ul>
      </Gridlist>
    </>
  );
};

const ThreeTwo = () => {
  return (
    <ChapterContainer>
      3.2 In relatie tot ‘het spelen van het spel’:
      <Gridlist list>
        <ul>
          <li>
            <span style={{ display: "flex", flexDirection: "column" }}>
              Iedereen is speler van het spel (of je nu wilt of niet).
              <small style={{ fontSize: "6pt" }}>
                (zie:
                <a href="https://nl.wikipedia.org/wiki/Homo_ludensen">
                  https://nl.wikipedia.org/wiki/Homo_ludensen
                </a>
                <span> en </span>
                <a href="https://www.dbnl.org/tekst/huiz003homo02_01/">
                  https://www.dbnl.org/tekst/huiz003homo02_01/
                </a>
                )
              </small>
            </span>
          </li>
          <li>
            <strong>
              <u>WELKE ROL WIL JE SPELEN ?</u>
            </strong>
          </li>
        </ul>
      </Gridlist>
    </ChapterContainer>
  );
};

export const GameModes = () => {
  return (
    <>
      <ModiContainer>
        <h1>
          <span>3.</span>SPEELMODI
        </h1>
        <ThreeOne />
        <ImageContainer>
          <img src="./static/3punt1.png" alt="part" width="800px" />
        </ImageContainer>
        <ThreeTwo />
      </ModiContainer>
    </>
  );
};