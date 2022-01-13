import React from 'react';
import styled from 'styled-components';

import Slider from './Slider';

const Visual = () => (
  <Container>
    <Slider />
  </Container>
);

const Container = styled.div`
  padding-top: 25px;
`;

export default Visual;
