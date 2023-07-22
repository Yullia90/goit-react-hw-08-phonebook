import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  z-index: 3;
  margin-top: 10px;
`;

export const FormsSt = styled(Form)`
  position: relative;
  padding: 60px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  color: #8f2c24;
  margin-bottom: 10px;
`;

export const InputBox = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  position: relative;
  width: 100%;
  padding: 15px 20px;
  outline: none;
  font-size: 1.25em;
  color: #8f2c24;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;

  ::placeholder {
    color: #8f2c24;
  }
`;

export const BtnForm = styled.button`
  position: relative;
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #8f2c24;
  color: #fff;
  cursor: pointer;
  font-size: 1.25em;
  font-weight: 500;
  transition: 0.5s;
  &:hover {
    background: #d64c42;
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: end;
`;

export const LinkNav = styled(NavLink)`
  font-size: 1.4em;
  font-weight: 500;
  margin-top: 15px;
  margin-right: 5px;
  /* padding: 12px; */
  /* text-decoration: none; */

  color: #8f2c24;
  cursor: pointer;
  transition: 0.5s;

  text-shadow: 1px 0 1px #ffffff, 0 1px 1px #ffffff, -1px 0 1px #ffffff,
    0 -1px 1px #ffffff;
  :hover,
  :focus {
    color: #d64c42;
  }
`;
