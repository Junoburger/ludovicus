import styled, { css } from "styled-components";

export const ModiContainer = styled.div`
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

export const Modi = styled.span``;

export const Modilist = styled.div<{ list?: boolean }>`
  ${(props) =>
    props.list &&
    css`
      ul li ${Modi}:before {
        content: "●";
        font-size: 10px;
        margin-right: 5em;
      }

      li {
        width: 50vw;
        display: flex;
        justify-content: space-between;
      }
      ${Modi} {
        margin-left: -20px;
      }
    `}
`;
export const ImageContainer = styled.div`
  position: relative;
`;

export const ChapterContainer = styled.div`
  margin-top: 50px;
`;
