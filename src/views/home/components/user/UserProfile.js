import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Card, Avatar, Button } from 'antd';

const { Meta } = Card;
const UserProfile = ({ data, setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Container>
      <Card
        style={{ width: 300 }}
        actions={[
          <div key="twit">
            짹짹
            <br />
            0
          </div>,
          <div key="followings">
            팔로잉
            <br />
            0
          </div>,
          <div key="followings">
            팔로워
            <br />
            0
          </div>,
        ]}
      >
        <Meta
          avatar={<Avatar>Ji</Avatar>}
          title={data.id}
        />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </Container>
  );
};

const Container = styled.div`

`;

export default UserProfile;
