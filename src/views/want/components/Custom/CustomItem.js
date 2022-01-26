import React from 'react';
import styled from 'styled-components';

import Toggle from './Toggle';
import Modal from './Modal';
import Tab from './Tab';
import Tag from './Tag';
import AutoComplete from './AutoComplete';
import ClickToEdit from './ClickToEdit';

const CustomItem = ({ data }) => {
  switch (data) {
  case 'toggle':
    return <Toggle />;
  case 'modal':
    return <Modal />;
  case 'tab':
    return <Tab />;
  case 'tag':
    return <Tag />;
  case 'autoComplete':
    return <AutoComplete />;
  case 'clickToEdit':
    return <ClickToEdit />;
  default:
  }
  return (
    <Container>
      <Title>{data}</Title>
    </Container>
  );
};

const Container = styled.div`
  
`;

const Title = styled.div`
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
