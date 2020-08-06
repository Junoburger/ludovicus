import styled, { css } from "styled-components";

export const RolesContainer = styled.div`
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

export const Role = styled.span``;

export const Roleslist = styled.div<{ list?: boolean }>`
  ${(props) =>
    props.list
      ? null
      : css`
          ul li ${Role}:before {
            content: "●";
            font-size: 10px;
            margin-right: 1em;
          }

          li {
            width: 50vw;
            display: flex;
            justify-content: space-between;
          }
          ${Role} {
            margin-left: -20px;
          }
        `}
`;
