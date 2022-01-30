import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { Checkbox } from '@mui/material';

const Signup = () => {
  const {
    register, handleSubmit, control, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Head>
        <Title>회원가입</Title>
      </Head>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <Input type="text" placeholder="아이디" {...register('id', { required: true })} />
          {
            errors.id?.type === 'required' && <ErrorMessage>* 아이디를 입력해주세요</ErrorMessage>
          }
        </Label>
        <Label>
          <Input type="text" placeholder="닉네임" {...register('nickname', { required: true })} />
          {
            errors.nickname?.type === 'required' && <ErrorMessage>* 닉네임을 입력해주세요</ErrorMessage>
          }
        </Label>
        <Label htmlFor="password">
          <Input type="password" placeholder="비밀번호" {...register('password', { required: true })} />
          {
            errors.password?.type === 'required' && <ErrorMessage>* 비밀번호를 입력해주세요</ErrorMessage>
          }
        </Label>
        <CheckSection>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} />}
          />
          약관에 동의해주세요
        </CheckSection>
        <Button>가입완료</Button>
        {
          errors.checkbox?.type === 'required' && <ErrorMessage>* 약관에 동의해주세요</ErrorMessage>
        }
      </Form>
    </Container>
  );
};

const Container = styled.div`

`;

const Head = styled.div`

`;

const Title = styled.div`
  font-size: 30px;
  padding: 20px 0 70px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Label = styled.label`
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 100%;
  height: 43px;
  outline: 0;
  border: 1px solid #ddd;
  padding: 8px;
  transition: .2s;
  font-size: 13px;
  &:hover {
    border-color: #18f;
  }
  &:focus {
    border-color: #18f;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 30px;
  background-color: #18f;
  border: 1px solid #18f;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: #ff0e0e;
  font-size: 14px;
  margin-top: 10px;
`;

const CheckSection = styled.div`
  font-size: 13px;
  margin: -12px;
`;

export default Signup;
