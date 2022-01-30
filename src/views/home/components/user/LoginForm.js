import React from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';

const LoginForm = ({ setIsLoggedIn, setData }) => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoggedIn(true);
    setData(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <Input type="text" placeholder="아이디" {...register('id', { required: true })} />
          {
            errors.id?.type === 'required' && <ErrorMessage>아이디를 입력해주세요</ErrorMessage>
          }
        </Label>
        <Label>
          <Input type="password" placeholder="비밀번호" {...register('password', { required: true })} />
          {
            errors.password?.type === 'required' && <ErrorMessage>비밀번호를 입력해주세요</ErrorMessage>
          }
        </Label>
        <Button>로그인</Button>
        <SignBtn>회원가입</SignBtn>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px 15px 10px;
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
  border: 1px solid #767676;
  outline: 0;
`;

const Button = styled.button`
  width: 50%;
  height: 33px;
  background: #18f;
  color: #fff;
  border: 1px solid #eee;
  font-size: 13px;
  cursor: pointer;
`;

const SignBtn = styled.button`
  width: 50%;
  height: 33px;
  background: #18f;
  color: #fff;
  border: 1px solid #eee;
  font-size: 13px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  padding-top: 10px;
  color: #ff0e0e;
  font-size: 14px;
`;

export default LoginForm;
