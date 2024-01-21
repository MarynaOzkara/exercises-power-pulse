import React, { Suspense } from 'react';
import {
  Container,
  Header,
  Navigation,
  NavItem,
  Link,
  NavList,
  MainContent,
} from './SheredLayout.styled';
import { Outlet } from 'react-router';

const SheredLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Navigation>
            <Link to="/">Logo</Link>
            <NavList>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/exercises">Exercises</Link>
              </NavItem>
            </NavList>
          </Navigation>
        </Header>
        <MainContent>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainContent>
      </Container>
    </>
  );
};

export default SheredLayout;
