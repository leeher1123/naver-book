import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import CustomItem from './CustomItem';
import Toggle from './Toggle';
import Modal from './Modal';
import Tab from './Tab';
import Tag from './Tag';
import AutoComplete from './AutoComplete';
import ClickToEdit from './ClickToEdit';

const Custom = () => {
  const title = ['Toggle', 'Modal', 'Tab', 'Tag', 'AutoComplete', 'ClickToEdit'];

  return (
    <Container>
      <List>
        {
          title.map((item) => <CustomItem data={item} />)
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
