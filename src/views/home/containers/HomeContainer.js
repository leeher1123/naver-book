import React, { useState } from 'react';
import styled from 'styled-components';

import LoginForm from '../components/user/LoginForm';
import UserProfile from '../components/user/UserProfile';

const HomeContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({
    id: '',
    password: '',
  });
  return (
    <Container>
      {
        isLoggedIn
          ? <UserProfile data={data} setIsLoggedIn={setIsLoggedIn} />
          : <LoginForm setIsLoggedIn={setIsLoggedIn} setData={setData} />
      }
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
  padding: 40px 30px 30px;
  height: 260px;
  margin-left: 20px;
  background-color: #eee;
`;

export default HomeContainer;
