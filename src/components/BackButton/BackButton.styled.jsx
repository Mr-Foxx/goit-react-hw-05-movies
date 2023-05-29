import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
  position: absolute;
  top: 5%;

  border-radius: 5px;
  padding: 5px;
  background-color: rgb(104 126 183);
  color: white;

  text-decoration: none;

  :hover {
    transform: scale(1.1);
  }
`;
