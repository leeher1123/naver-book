import React from 'react';
import styled from 'styled-components';

import FollowList from './FollowList';
import NicknameEditForm from './NicknameEditForm';
import Signup from './Signup';

const Profile = () => {
  const followerList = [{ nickname: '지민' }, { nickname: '영로' }, { nickname: '수호' }];
  const followingList = [{ nickname: '유리' }, { nickname: '유나' }, { nickname: '민채' }];
  return (
    <Container>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
      <Signup />
    </Container>
  );
};

const Container = styled.div`
  margin-left: 30px;
`;

export default Profile;
