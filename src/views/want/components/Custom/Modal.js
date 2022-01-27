import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Modal = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const onClick = () => {
    setOpenPopup(true);
  };
  const onClose = () => {
    setOpenPopup(false);
  };
  return (
    <Container>
      <Button onClick={onClick}>Open Modal</Button>
      {
        openPopup && (
          <ModalBox>
            <Box>
              <CloseBtn onClick={onClose}><MdClose /></CloseBtn>
              <span>HELLO JIMIN !</span>
            </Box>
          </ModalBox>
        )
      }
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
`;

const Button = styled.div`
  width: 130px;
  height: 55px;
  margin: 0 auto;
  background: #5a22ea;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.42);
`;

const Box = styled.div`
  position: absolute;
  top: 116px;
  left: 515px;
  width: 414px;
  height: 216px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const CloseBtn = styled.div`
  padding: 15px 0 50px;
  font-size: 30px;
  cursor: pointer;
`;

export default Modal;
