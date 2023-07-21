import styled, { keyframes } from 'styled-components';

export const Section = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  z-index: 3;
`;

export const ImgBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const TressImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
`;

const animateGirl = keyframes`
  0% {
      transform: translateX(calc(100% + 100vw))
    }
    50% {
      transform: translateX(calc(-100% - 100vw))
    }
 50.01% {
      transform: translateX(calc(-100% - 100vw)) rotateY(180deg)
    }
    100% {
      transform: translateX(calc(100% + 100vw)) rotateY(180deg)
    }
    
`;

export const GirlImg = styled.img`
  position: absolute;
  scale: 0.65;
  pointer-events: none;
  animation: ${animateGirl} 20s linear infinite;
`;

export const Leaves = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
`;

const animateTress = keyframes`
    0% {
        opacity: 0;
        top: -10%;
        transform: translateX(20px) rotate(0deg)
    }
    10% {
        opacity: 1;
    }
    20% {
      transform: translateX(-20px) rotate(45deg)
    }
    40% {
      transform: translateX(-20px) rotate(90deg)
    }
    60% {
      transform: translateX(20px) rotate(180deg)
    }
    80% {
      transform: translateX(-20px) rotate(45deg)
    }
    100% {
      top: 110%;
      transform: translateX(20px) rotate(225deg)
    }
    
`;

export const Set = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  & div {
    position: absolute;
    display: block;
  }
  & div:nth-child(1) {
    left: 20%;
    animation: ${animateTress} 20s linear infinite;
  }
  & div:nth-child(2) {
    left: 50%;
    animation: ${animateTress} 14s linear infinite;
  }
  & div:nth-child(3) {
    left: 70%;
    animation: ${animateTress} 12s linear infinite;
  }
  & div:nth-child(4) {
    left: 5%;
    animation: ${animateTress} 15s linear infinite;
  }
  & div:nth-child(5) {
    left: 85%;
    animation: ${animateTress} 18s linear infinite;
  }
  & div:nth-child(6) {
    left: 90%;
    animation: ${animateTress} 12s linear infinite;
  }
  & div:nth-child(7) {
    left: 15%;
    animation: ${animateTress} 14s linear infinite;
  }
  & div:nth-child(8) {
    left: 60%;
    animation: ${animateTress} 15s linear infinite;
  }
`;
