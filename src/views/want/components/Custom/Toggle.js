import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Toggle = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const onClick = () => {
    setSwitchOn(!switchOn);
  };
  return (
    <Container className={cn({ isActive: switchOn })}>
      <Box onClick={onClick}>
        <Circle />
        <Color />
      </Box>
      {
        switchOn ? <Text>Toggle Switch ON</Text> : <Text>Toggle Switch OFF</Text>
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 30px;
`;

const Box = styled.div`
  width: 70px;
  height: 30px;
  background-color: #ccc;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const Color = styled.div`
  width: 150px;
  height: 50px;
  transform: translateX(-100%);
  background-color: red;
  transition: transform .5s linear;
  .isActive & {
    transform: translateX(-50%);
  }
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  transition: transform .4s linear;
  .isActive & {
    transform: translate(40px, -50%);
  }
`;

const Text = styled.div`
  padding-top: 15px;
`;

export default Toggle;
