import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

const Tag = () => {
  const nextId = useRef(3);
  const [value, setValue] = useState('');
  const [tags, setTags] = useState([
    {
      id: 1,
      text: 'CodeStates',
    },
    {
      id: 2,
      text: 'JJang',
    },
  ]);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const tag = {
      id: nextId.current,
      text: value,
    };
    setTags(tags.concat(tag));
    setValue('');
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  return (
    <Container>
      <TagForm onSubmit={onSubmit}>
        {
          tags.map((item) => (
            <TagItem>
              {item.text}
              <Icon onClick={() => onRemove(item.id)}><AiFillCloseCircle /></Icon>
            </TagItem>
          ))
        }
        <Input
          type="text"
          placeholder="Press enter to add tags"
          onChange={onChange}
          value={value}
        />
      </TagForm>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  justify-content: center;
`;

const TagForm = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  border: 1px solid #aaa;
  border-radius: 5px;
  overflow: hidden;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  background: #350d9c;
  color: #fff;
  margin: 0 5px;
  border-radius: 4px;
  padding: 0 5px;
`;

const Input = styled.input`
  display: block;
  width: 175px;
  height: 100%;
  border: 0;
  outline: 0;
  padding: 8px;
  line-height: 34px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  cursor: pointer;
`;

export default Tag;
