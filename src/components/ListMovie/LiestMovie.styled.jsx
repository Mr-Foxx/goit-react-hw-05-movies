import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
`;

export const Li = styled.li`
  margin: 5px;
  list-style: none;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: rgb(71, 99, 175);

  :hover {
    background-color: rgb(71, 99, 175);
    color: white;
  }
`;
