import React from 'react';
import styled from 'styled-components';

const GridList = ({ data, children }) => (
  <Container>
    <Row>
      {
        data.map((item) => (
          <Col>{children(item)}</Col>
        ))
      }
    </Row>
  </Container>
);

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 16%;
  padding: 5px;
`;

export default GridList;
