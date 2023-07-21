import { Form, Field } from 'formik';
import { IoPersonAddOutline } from 'react-icons/io5';

import styled from 'styled-components';

export const Forms = styled(Form)`
  border-bottom: 2px solid rgb(160, 163, 186);
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;

  padding-bottom: 20px;
  color: #8f2c24;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const Input = styled(Field)`
  padding: 15px 20px;
  margin-top: 10px;
  margin-left: 35px;
  margin-bottom: 20px;
  border-radius: 50px;
  height: 25px;
  width: 250px;
  padding-left: 10px;
  border-color: none;
  display: flex;
  color: #8f2c24;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  outline: none;
  border: 1px solid rgb(189, 189, 189);

  &:hover,
  &:focus {
    border-color: #8f2c24;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  margin-left: auto;
  border-radius: 30px;
  padding: 5px 20px;
  background-color: #8f2c24;

  display: flex;

  color: white;

  transition: 0.5s;
  &:hover,
  &:focus {
    background-color: #3fb56e;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const IoPerson = styled(IoPersonAddOutline)``;
