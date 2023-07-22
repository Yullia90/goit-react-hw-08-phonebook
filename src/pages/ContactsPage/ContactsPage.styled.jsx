import styled from '@emotion/styled';

export const Container = styled.div`
  z-index: 3;
  margin-top: 15px;
  border: 1px solid rgb(189, 189, 189);
  background-color: rgb(250, 250, 250);
  border-radius: 12px;
  position: relative;
  padding: 30px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 550px;
  max-height: 100%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  line-height: 24px;

  letter-spacing: 0.5px;
`;

export const TitleContacts = styled.h1`
  color: #8f2c24;

  font-weight: 600;
  text-align: center;
  /* font-size: 26px; */
  line-height: 24px;
  margin-bottom: 10px;
`;
