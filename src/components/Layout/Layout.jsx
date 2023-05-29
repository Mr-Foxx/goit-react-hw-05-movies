import { Suspense } from 'react';
import { Heder, Li, Nav, NavvLink, Ul } from './Layout.styled';

const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <Heder>
        <Nav>
          <Ul>
            <Li>
              <NavvLink to="/">HOME</NavvLink>
            </Li>
            <Li>
              <NavvLink to="Movies">Movies</NavvLink>
            </Li>
          </Ul>
        </Nav>
      </Heder>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
