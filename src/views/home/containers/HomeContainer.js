import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Action } from '../redux/reducer';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    id: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Action.Creators.loginRequest(values));
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Label>
          <Input
            type="text"
            placeholder="아이디"
            onChange={onChange}
            value={values.id}
            name="id"
          />
        </Label>
        <Label>
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={values.password}
            name="password"
          />
        </Label>
        <Button>로그인</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30px;
  height: 300px;
`;

const Form = styled.form`
  width: 300px;
  height: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  cursor: pointer;
`;

export default HomeContainer;
