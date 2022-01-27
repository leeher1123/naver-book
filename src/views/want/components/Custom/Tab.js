import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Tab = () => {
  const tabData = ['Tab1', 'Tab2', 'Tab3'];
  const [currentIndex, setCurrentIndex] = useState();
  const onClick = (index) => {
    setCurrentIndex(index);
  };
  // eslint-disable-next-line consistent-return
  const getIndex = () => {
    if (currentIndex === 0) {
      return 'Tab menu ONE';
    }
    if (currentIndex === 1) {
      return 'Tab menu TWO';
    }
    if (currentIndex === 2) {
      return 'Tab menu THREE';
    }
  };
  return (
    <Container>
      <TabMenu>
        {
          tabData.map((item, index) => (
            <TabItem
              onClick={() => onClick(index)}
              className={cn({ isActive: currentIndex === index })}
            >
              {item}
            </TabItem>
          ))
        }
      </TabMenu>
      <TabContent>
        {getIndex()}
      </TabContent>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
`;

const TabMenu = styled.div`
  width: 650px;
  height: 43px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  background: #ddd;
`;

const TabItem = styled.div`
  width: 208px;
  height: 100%;
  padding-left: 10px;
  line-height: 43px;
  color: #767676;
  cursor: pointer;
  &.isActive {
    background-color: rebeccapurple;
    color: #fff;
  }
`;

const TabContent = styled.div`
  width: 650px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Tab;
