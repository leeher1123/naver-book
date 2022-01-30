import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';

const { Search } = Input;

const NicknameEditForm = () => {
  const style = useMemo(() => ({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '30px',
    width: '600px',
  }), []);
  return (
    <Container>
      <Form style={style}>
        <Search addonBefore="닉네임" enterButton="수정" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #000;
  margin-bottom: 30px;
`;

export default NicknameEditForm;
