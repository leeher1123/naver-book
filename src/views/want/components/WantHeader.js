import React from 'react';
import styled from 'styled-components';

import WantMenu from './WantMenu';
import AsideMenu from './AsideMenu';

const WantHeader = () => (
  <Container>
    <Contents>
      <Logo>
        <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="메뉴 이미지" />
        <h2>wanted</h2>
      </Logo>
      <WantMenu />
      <AsideMenu />
    </Contents>
  </Container>
);

const Container = styled.div`
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const Contents = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const Logo = styled.div`
  img {
    width: 17px;
    height: 14px;
    margin: -2px 15px 0 0;
  }
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 23px;
`;

export default WantHeader;
