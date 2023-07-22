import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  border-bottom: 1px solid #2a363b;
  z-index: 10;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeaderTitle = styled.h1`
  margin-left: 50px;
  margin-right: 10px;
  font-size: 2em;
  font-weight: 900;
  left: 45%;
  color: #8f2c24;
  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #000, -1px 0 1px #f8f8f8,
    0 -1px 1px #ffffff;
`;
