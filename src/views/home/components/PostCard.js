import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  Popover,
  Avatar, Space, List, Comment,
} from 'antd';
import {
  EllipsisOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartTwoTone,
} from '@ant-design/icons';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((p) => !p);
  }, []);
  return (
    <Container>
      <Card
        style={{ borderColor: '#bbb' }}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="red" key="heart" onClick={onToggleLike} />
            : <HeartTwoTone key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={(
              <Space>
                {post.id && post.User.id === post.id ? (
                  <>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                  </>
                ) : <Button> 신고 </Button>}
              </Space>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {
        commentFormOpened && (
          <div>
            <CommentForm post={post} />
            <List
              header={`${post.Comments.length}개의 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comments}
              renderItem={(item) => (
                <li>
                  <Comment
                    author={item.User.nickname}
                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>} // 닉네임 첫번째 글자가 사진으로 들어간다.
                    content={item.content}
                  />
                </li>
              )}
            />
          </div>
        )
      }
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  margin-bottom: 20px;
`;

const Button = styled.button`

`;

export default PostCard;
