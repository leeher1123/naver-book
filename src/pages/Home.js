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
      <Post>
        <PostForm />
        {
          mainPosts.map((post) => <PostCard key={post.id} post={post} />)
        }
      </Post>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Post = styled.div`
  
`;

export default Home;
