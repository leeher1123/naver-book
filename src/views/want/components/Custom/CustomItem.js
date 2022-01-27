import React, { } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomItem = ({ data }) => (
  <Container>
    <Title to={`${data.to}`}>{data.title}</Title>
  </Container>
);

const Container = styled.div`
  
`;

const Title = styled(Link)`
  margin-right: 15px;
  padding: 10px;
  background-color: rgba(238, 238, 238, 0.29);
  border: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: rgba(238, 238, 238, 0.64);
  }
`;

export default CustomItem;
