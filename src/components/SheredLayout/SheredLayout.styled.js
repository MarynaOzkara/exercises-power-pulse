import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  /* border: 1px solid #fff; */
`;

export const Header = styled.div`
  padding: 20px 96px;
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  margin: 0 auto;
`;
export const Navigation = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 16px;
`;
export const NavItem = styled.li``;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  padding: 10px 27px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #efede8;
  &.active {
    color: #efede8;
    background-color: #e6533c;
  }
  &:hover,
  :focus {
    color: tomato;
  }
`;
export const MainContent = styled.div`
  max-width: 1400px;
  padding: 0 96px;
  margin: 0 auto;
  /* border: 1px solid #fff; */
  margin-top: 72px;
  margin-bottom: 64px;
`;
