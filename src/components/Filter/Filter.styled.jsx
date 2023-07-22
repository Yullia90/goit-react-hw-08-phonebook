import styled from '@emotion/styled';

export const Label = styled.label`
  font-size: 18px;
  line-height: 22px;

  margin-left: 20px;
  color: #8f2c24;
`;

export const Input = styled.input`
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  padding-left: 15px;
  height: 30px;
  width: 350px;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 15px;
  color: #8f2c24;
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    border-color: #8f2c24;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
