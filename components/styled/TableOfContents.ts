import styled from "styled-components";

export const ContentOptions = styled.div`
  position: relative;
`;
export const ContentOption = styled.div``;

export const Contents = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 10vw;
  h1 {
    font-size: 5vw;
  }
  ${ContentOptions} h3 {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  ${ContentOption} div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  ${ContentOption} span {
    margin-right: 25px;
  }
`;
