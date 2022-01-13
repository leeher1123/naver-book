import React from 'react';
import styled from 'styled-components';

import { AlertIcon, SearchIcon } from '../icons';

const AsideMenu = () => (
  <Container>
    <LeftMenu>
      <span><SearchIcon /></span>
      <span><AlertIcon /></span>
      <User />
    </LeftMenu>
    <RightMenu>
      <Bar />
      <Button>기업 서비스</Button>
    </RightMenu>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 5px 10px 0 0;
    padding: 0 10px;
  }
`;

const User = styled.div`
  width: 28px;
  height: 28px;
  background: #000;
  border-radius: 50%;
  margin-right: 12px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  color: #666;
`;

const Bar = styled.div`
  width: 1px;
  height: 10px;
  margin: 10px;
  background: #e1e2e3;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #e1e2e3;
  color: #666;
  padding: 0 10px;
  margin-left: 15px;
  font-size: 13px;
  height: 30px;
  border-radius: 18px;
`;

export default AsideMenu;
