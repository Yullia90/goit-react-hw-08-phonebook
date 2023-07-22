import { IoLogOutOutline } from 'react-icons/io5';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const UserTitle = styled.p`
  margin-top: 7px;
  text-align: center;
  font-size: 1.25em;
  font-weight: 900;
  color: #8f2c24;
  margin-right: 20px;
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;
`;

export const BtmLogout = styled.button`
  padding: 4px;
  border: none;

  backdrop-filter: blur(10px);
  background-color: transparent;
  color: #2a363b;
  cursor: pointer;
`;

export const LogOut = styled(IoLogOutOutline)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: 0.5s;
  :hover,
  :focus {
    padding: 2px;
    color: #8f2c24;
  }
`;
