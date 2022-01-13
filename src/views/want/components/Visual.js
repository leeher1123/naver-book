import React from 'react';
import styled, { css } from 'styled-components';

import SliderA from './Slider';

const Visual = () => (
  <Container>
    <SliderA />
  </Container>
);

const Container = styled.div`
  padding-top: 25px;
  position: relative;
`;

export default Visual;
