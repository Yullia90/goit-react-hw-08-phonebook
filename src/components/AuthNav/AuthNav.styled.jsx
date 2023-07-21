import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;

  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  transition: 0.5s;
  color: #8f2c24;
  cursor: pointer;
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;
  :hover,
  :focus {
    color: white;
  }
  &.active {
    backdrop-filter: blur(10px);
    color: white;
    background-color: #0062ff53;
  }
`;
