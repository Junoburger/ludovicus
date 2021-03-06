import React from "react";
import {
  ModiContainer,
  Modilist,
  Modi,
  ImageContainer,
  ChapterContainer,
} from "../styled/GameModes";

const ThreeOne = () => {
  return (
    <>
      3.1 Er zijn meerdere speelmodi, namelijk:
      <Modilist>
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
      </Modilist>
    </>
  );
};

const ThreeTwo = () => {
  // ALL INLINE STYLES WILL BE STYLED_COMPONENTS WITH LOGIC

  return (
    <ChapterContainer>
      3.2 In relatie tot ‘het spelen van het spel’:
      <Modilist list="true">
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
      </Modilist>
    </ChapterContainer>
  );
};

const Seven = () => {
  // ALL INLINE STYLES WILL BE STYLED_COMPONENTS WITH LOGIC
  return (
    <>
      <h1>
        <span>7.</span>SPEELMODI (2)
      </h1>
      <ChapterContainer>
        7.1 <span>Er zijn speelmodi die versmeltingen zijn van andere speelmodi:</span>
        <Modilist style={{ flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ul>
                <li>zelf-regisserende speler</li>
                <span>
                  ("je zelf <i>doen</i>")
                </span>
              </ul>
            </div>
            <div>(a) + (r) = (zrs)</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ul>
                <li>zelf-toeschouwende speler</li>
                <span>
                  ("je zelf <i>zien</i>")
                </span>
              </ul>
            </div>
            <div>(a) + (t) = (zts)</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ul>
                <li>zelfbewuste speler</li>
                <span>
                  ("je zelf <i>zijn</i>")
                </span>
              </ul>
            </div>
            <div>(zrs) + (zts) = (zbs)</div>
          </div>
        </Modilist>
      </ChapterContainer>
    </>
  );
};

export const GameModes = ({ ...props }) => {
  return (
    <>
      <ModiContainer>
        {!props.second ? (
          <>
            <h1>
              <span>3.</span>SPEELMODI
            </h1>
            <ThreeOne />
            <ImageContainer>
              <img src="./static/3punt1.png" alt="part" width="100%" />
            </ImageContainer>
            <ThreeTwo />
          </>
        ) : (
          <Seven />
        )}
      </ModiContainer>
    </>
  );
};
