import styled from 'styled-components';
import { IoPersonOutline, IoCallOutline, IoTrashSharp } from 'react-icons/io5';

export const Info = styled.p`
  color: #8f2c24;
  margin-top: 15px;
  margin-right: 30px;
  text-align: end;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const Container = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
  border: 1px ridge #8f2c24;
  border-radius: 15px;
  padding: 15px;
  //////
  overflow-y: scroll;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);

  & {
    list-style-type: none;
    list-style-position: inside;
    max-height: 175px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 15px;
  border: 1px dashed gray;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;

  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 10px;

  align-items: flex-end;
  display: flex;
`;

export const PersonOutline = styled(IoPersonOutline)`
  /* padding-right: 5px; */
  margin-right: 10px;
`;
export const CallOutline = styled(IoCallOutline)`
  margin-left: 10px;
  margin-right: 10px;
  /* padding-right: 8px; */
  /* padding-left: 5px; */
`;

export const IoTrashOut = styled(IoTrashSharp)`
  /* padding: 2px; */
`;

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  padding: 12px;
  margin-left: auto;

  border-radius: 50%;

  background-color: #8f2c24;
  color: white;

  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: #ff0000;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
