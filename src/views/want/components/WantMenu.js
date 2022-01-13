import React from 'react';
import styled from 'styled-components';

const WantMenu = () => (
  <Container>
    <List>
      <Item>채용</Item>
      <Item>이벤트</Item>
      <Item>직군별 연봉</Item>
      <Item>이력서</Item>
      <Item>커뮤니티</Item>
      <Item>프리랜서</Item>
      <Item>AI 합격예측</Item>
    </List>
  </Container>
);

const Container = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 600;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  height: 50px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-color: #ddd;
  }
`;

export default WantMenu;
