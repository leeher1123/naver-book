import React from 'react';
import styled from 'styled-components';

import WantHeader from '../views/want/components/WantHeader';
import Visual from '../views/want/components/Visual';

const Want = () => (
  <Container>
    <WantHeader />
    <Visual />
  </Container>
);

const Container = styled.div`
  
`;

export default Want;
