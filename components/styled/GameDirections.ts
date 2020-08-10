import styled, { css } from "styled-components";

export const DirectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25vh 10vw;
  h1 span {
    margin-right: 50px;
  }
  h1 {
    padding-bottom: 5vh;
  }
`;

export const Direction = styled.span``;

export const Directionslist = styled.div<{ list?: boolean }>`
  ${(props) =>
    props.list &&
    css`
      ul li ${Direction}:before {
        content: "●";
        font-size: 10px;
        margin-right: 5em;
      }

      li {
        width: 50vw;
        display: flex;
        justify-content: space-between;
      }
      ${Direction} {
        margin-left: -20px;
      }
    `}
`;

export const ChapterContainer = styled.div`
  margin-top: 50px;
`;

export const DirectionAction = styled.div`
  font-size: 18pt;
`;
