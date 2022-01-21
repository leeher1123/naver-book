import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import HomeContainer from '../views/home/containers/HomeContainer';
import PostCard from '../views/home/components/PostCard';
import PostForm from '../views/home/components/PostForm';

const Home = () => {
  const { mainPosts } = useSelector((state) => state.home);
  return (
    <Container>
      <HomeContainer />
      <PostForm />
      {
        mainPosts.map((post) => <PostCard key={post.id} post={post} />)
      }
    </Container>
  );
};

const Container = styled.div`

`;

export default Home;
