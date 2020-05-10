import styled from 'styled-components';

export const Header = styled.header`
  background: rgb(123, 154, 61);
`;

export const HeaderNav = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  color: rgb(29, 36, 32);
`;

export const HeaderItem = styled.li`
  cursor: pointer;
`;

export const HeaderLink = styled.a`
  font-size: 28px;
  font-family: cursive;
  :hover {
    color: rgba(223, 232, 227, 0.9);
  }
`;
