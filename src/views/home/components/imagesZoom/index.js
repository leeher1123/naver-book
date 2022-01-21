import React, { useState } from 'react';
import styled from 'styled-components';
import Slick from 'react-slick';

const ImagesZoom = ({ images, onClose }) => {
  const [currentState, setCurrentState] = useState(0);
  return (
    <Container>
      <Overlay>
        <Header>
          <h1>상세 이미지</h1>
          <Button onClick={onClose}>X</Button>
        </Header>
        <SlickWrapper>
          <div>
            <Slick
              initialSlide={0} // 첫번째 이미지 무엇으로 할지?
              afterChange={(slide) => setCurrentState(slide)} // 페이지 바뀔 때마다 페이지 정보를 준다.
              infinite // 무한반복
              arrows={false} // 화살표 안보이게
              slidesToShow={1} // 한번에 한개씩만 보이게
              slidesToScroll={1} // 한개씩만 넘길 수 있게
            >
              {
                images.map((item) => (
                  <div key={item.src}>
                    <img src={item.src} alt="item.src" />
                  </div>
                ))
              }
            </Slick>
          </div>
        </SlickWrapper>
      </Overlay>
    </Container>
  );
};

const Container = styled.div`

`;

const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.header`
  height: 44px;
  background: #fff;
  position: relative;
  padding: 0;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
  img {
    margin: 60px auto;
    width: 700px;
    height: 670px;
    object-fit: cover;
  }
`;

const Indicator = styled.div`
  text-align: center;
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export default ImagesZoom;
