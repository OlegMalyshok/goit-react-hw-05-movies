import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
      <hr />
      <Outlet />
    </div>
  );
};
