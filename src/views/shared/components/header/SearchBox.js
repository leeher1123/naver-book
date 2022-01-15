import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const onSubmitBook = (e) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Container>
      <Form onSubmit={onSubmitBook}>
        <Input type="text" onChange={onChange} value={value} />
        <Button>검색</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  
`;

const Form = styled.form`
  height: 35px;
`;

const Input = styled.input`
  width: 450px;
  height: 100%;
  border: 3px solid #3EAF0C;
  outline: 0;
  padding: 8px;
`;

const Button = styled.button`
  height: 100%;
  margin-left: 5px;
  background-color: #46BC13;
  color: #fff;
  border: 0;
  border-radius: 1px;
  padding: 0 10px;
`;

export default SearchBox;
