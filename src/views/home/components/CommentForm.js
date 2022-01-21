import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

import { useInput } from '../../../hooks/useInput';

const CommentForm = ({ post }) => {
  const [commentText, onChangeCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Container>
      <Form onFinish={onSubmitComment}>
        <Form.Item>
          <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>입력</Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

export default CommentForm;
