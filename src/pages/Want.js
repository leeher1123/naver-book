import React from 'react';
import styled from 'styled-components';

import WantHeader from '../views/want/components/WantHeader';
import Visual from '../views/want/components/Visual';
import Custom from '../views/want/components/Custom';

const Want = () => (
  <Container>
    <WantHeader />
    <Visual />
    <Custom />
  </Container>
);

const Container = styled.div`
  
`;

export default Want;
