import styled from "styled-components";

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

export const Gridlist = styled.div`
  ul li ${Modi}:before {
    content: "●";
    font-size: 10px;
    margin-right: 5em;
  }
  li {
    width: 30vw;
    display: flex;
    justify-content: space-between;
  }
  ${Modi} {
    margin-left: -20px;
  }
`;
