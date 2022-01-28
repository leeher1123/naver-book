import React, { useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [inputs, setInputs] = useState({
    username: '김코딩',
    age: '20',
  });
  const [result, setResult] = useState({ ...inputs });
  const { username, age } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const InputBlur = (e) => {
    setResult(inputs);
  };
  return (
    <Container>
      <Label>
        이름
        {' '}
        <Input
          type="text"
          onChange={onChange}
          name="username"
          value={username}
          onBlur={InputBlur}
        />
      </Label>
      <Label>
        나이
        {' '}
        <Input
          type="text"
          onChange={onChange}
          name="age"
          value={age}
          onBlur={InputBlur}
        />
      </Label>
      <Text>
        {`이름 ${result.username} 나이 ${result.age}`}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
  margin-left: 30px;
`;

const Label = styled.div`
  margin-bottom: 50px;
`;

const Input = styled.input`
  border: 1px solid #bbb;
  height: 35px;
  padding: 8px;
  &:focus {
    height: 45px;
  }
`;

const Text = styled.div`

`;

export default ClickToEdit;
