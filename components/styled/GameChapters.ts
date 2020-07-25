import styled from "styled-components";

export const GameContainer = styled.div`
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
export const GameList = styled.div`
  display: flex;
  div {
    padding-bottom: 5vh;
  }
`;
export const Chapters = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Chapter = styled.div`
  font-size: 1.17em;
`;

export const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 1.17em;
    margin-right: 50px;
    padding-bottom: 5vh;
  }
`;
