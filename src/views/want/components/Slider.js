import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';

import { images } from '../../../appData';
import { LeftBtn, RightBtn } from '../icons';

const SliderA = () => {
  const sliderRef = useRef();
  useEffect(() => {
    sliderRef.current.scrollLeft = (window.innerWidth * 0.75
      - (window.innerWidth - window.innerWidth * 0.75) / 2);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '190px',
    draggable: true,
  };
  const onClickLeft = () => {
    sliderRef.current.slickPrev();
  };
  const onClickRight = () => {
    sliderRef.current.slickNext();
  };
  return (
    <Container>
      <StyledSlider {...settings} ref={sliderRef}>
        {
          images.map((item, index) => <img src={item.src} key={item.id} alt="" />)
        }
      </StyledSlider>
      <Buttons>
        <LeftButton onClick={onClickLeft}><LeftBtn /></LeftButton>
        <RightButton onClick={onClickRight}><RightBtn /></RightButton>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
    
`;

const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  img {
    border-radius: 4px;
    padding: 0 12px;
  }
`;

const Buttons = styled.div`
  
`;

const buttonStyle = css`
  position: absolute;
  top: 143px;
  width: 30px;
  height: 60px;
  border: 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  cursor: pointer;
  svg {
    fill: #111;
    width: 16px;
    height: 16px;
  }
`;

const LeftButton = styled.button`
  ${buttonStyle};
  left: 120px;
`;

const RightButton = styled.button`
  ${buttonStyle};
  right: 105px;
`;

export default SliderA;
