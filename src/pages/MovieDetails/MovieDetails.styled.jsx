import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 15px;
`;

export const ContainerText = styled.div`
  padding: 15px;
`;

export const Img = styled.img`
  width: 600px;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  margin: 10px;
  text-decoration: none;
`;

export const P = styled.p`
  margin: 0;
  text-align: center;
`;

export const NavLinkBtn = styled(NavLink)`
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
