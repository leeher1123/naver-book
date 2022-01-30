import React from 'react';
import styled from 'styled-components';

import HomeContainer from '../views/home/containers/HomeContainer';
import Profile from '../views/home/components/user/Profile';

const Home = () => (
  <Container>
    <HomeContainer />
    <Profile />
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

export default Home;
