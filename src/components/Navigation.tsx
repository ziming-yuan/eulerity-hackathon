import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(NavLink)`
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  &.active {
    color: ${(props) => props.theme.colors.darker};
    border-bottom: 2px solid ${(props) => props.theme.colors.darker};
  }
`;

const Navigation = () => {
  return (
    <NavBar>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About Me</NavItem>
    </NavBar>
  );
};

export default Navigation;
