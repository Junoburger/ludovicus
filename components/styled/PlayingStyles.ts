import styled from "styled-components";

export const PlayStylesContainer = styled.div`
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

export const FlexContainer = styled.div`
  display: flex;
`;

export const PlayStylesList = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
`;

export const PlayStylesListItem = styled(FlexContainer)`
  align-items: baseline;
  justify-content: space-evenly;
`;
