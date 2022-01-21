import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../redux/reducer';

const PostForm = () => {
  const imageInput = useRef();
  const dispatch = useDispatch();
  const { imagePath } = useSelector((state) => state.home);
  const [text, setText] = useState('');
  const onSubmit = useCallback(() => {
    dispatch(addPost); // 여기서 addPost 는 객체. 동적으로 action 이 필요할 때 action creator 함수를 만들어주는 것
    setText('');
  }, []);
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click(); // 클릭하면 파일 선택 뜬다.
  }, [imageInput]);
  return (
    <Container>
      <Form style={{ margin: '10px 0 20px' }} onFinish={onSubmit}>
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="어떤 신기한 일이 있었나요?"
        />
        <div>
          <InputFile type="file" multiple hidden ref={imageInput} />
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit">입력</Button>
        </div>
        <div>
          {
            imagePath.map((v) => (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={v} style={{ width: '200px' }} alt={v} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            ))
          }
        </div>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  height: 200px;
`;

const InputFile = styled.input`

`;

export default PostForm;
