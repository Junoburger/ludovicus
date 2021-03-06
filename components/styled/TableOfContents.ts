import styled from "styled-components";

export const ContentOptions = styled.div`
  position: relative;
`;
export const ContentOption = styled.div`
  text-align: left;
  span {
    margin-left: 5vw;
  }
  div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  margin-left: 10vw;
  h1 {
    font-size: 5vw;
  }
  ${ContentOptions} h3 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
