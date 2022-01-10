import React from 'react';
import styled from 'styled-components';

import SearchBox from './SearchBox';

const Header = () => (
  <Container>
    <Logo>
      <img src="https://ssl.pstatic.net/static/header/h1/bi_naver.gif" alt="네이버 로고" />
      <img src="https://ssl.pstatic.net/static/book/image/h_book.gif" alt="책 문자" />
    </Logo>
    <SearchBox />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 10px;
`;

const Logo = styled.div`
  width: 175px;
`;

export default Header;
