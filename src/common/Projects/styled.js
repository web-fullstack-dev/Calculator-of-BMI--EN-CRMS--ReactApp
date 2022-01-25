import styled, { css } from "styled-components";

export const Links = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding: 20px;
  cursor: context-menu;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  cursor: context-menu;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.lightSlateGrey};
  color: ${({ theme }) => theme.color.white};
  border-style: none;
  font-size: 14px;
  padding: 8px;
  margin: 5px;
  transition: 0.1s;

  &:hover {
    filter: brightness(110%);
  }

  ${({ deepSkyBlue }) => deepSkyBlue && css`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.deepSkyBlue};
  `};

  &:hover {
    filter: brightness(110%);
  }
`;


