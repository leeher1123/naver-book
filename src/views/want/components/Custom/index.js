import React from 'react';
import styled from 'styled-components';

import CustomItem from './CustomItem';
import Toggle from './Toggle';
import Modal from './Modal';
import Tab from './Tab';
import Tag from './Tag';
import AutoComplete from './autoComplete/AutoComplete';
import ClickToEdit from './ClickToEdit';

const Custom = () => {
  const customData = [
    {
      title: 'Toggle',
      to: '/toggle',
    },
    {
      title: 'Modal',
      to: '/modal',
    },
    {
      title: 'Tab',
      to: '/tab',
    },
    {
      title: 'Tag',
      to: '/tag',
    },
    {
      title: 'AutoComplete',
      to: '/autoComplete',
    },
    {
      title: 'ClickToEdit',
      to: '/clickToEdit',
    },
  ];

  return (
    <Container>
      <List>
        {
          customData.map((item) => <CustomItem data={item} />)
        }
      </List>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
`;

export default Custom;
