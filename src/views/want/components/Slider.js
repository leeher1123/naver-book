import React from 'react';
import styled from 'styled-components';

const Slider = () => (
  <Container>
    <img src="https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg" alt="주황" />
    <img src="https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg" alt="파랑" />
    <img src="https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg" alt="남색" />
    <img src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" alt="초록" />
    <img src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" alt="연두" />
    <img src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg" alt="해커리어" />
  </Container>
);

const Container = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    img {
        padding: 0 12px;
    }
`;

export default Slider;
