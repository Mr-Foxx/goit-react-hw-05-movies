import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Heder = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 0;
`;
export const Li = styled.li`
  list-style: none;
  margin-right: 10px;
`;
export const NavvLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(77, 107, 187);

  &:hover {
    color: black;
  }

  &.active {
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(77, 107, 187);
    color: white;
  }
`;
