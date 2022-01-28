import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/all';

import cn from 'classnames';

import DropDown from './DropDown';

const AutoComplete = () => {
  const deselectedOptions = [
    'antique',
    'bind',
    'carrot',
    'domain',
    '안녕하세요',
    '뽀로로',
    '김남길',
    '이지민',
    '한수연',
    '한다연',
  ];
  const [value, setValue] = useState('');
  const [hasText, setHasText] = useState(false);
  const [options, setOptions] = useState(deselectedOptions);
  useEffect(() => {
    if (value === '') {
      setHasText(false);
      setOptions([]);
    }
    if (value !== '') {
      setOptions(deselectedOptions.filter((deselectedOption) => deselectedOption.includes(value)));
    }
  }, [value]);
  const handleInputChange = (e) => {
    setValue(e.target.value);
    setHasText(true);
  };
  const onClose = () => {
    setValue('');
  };
  const handleDropDownClick = (clickedOption) => {
    setValue(clickedOption);
  };
  return (
    <Container>
      <InputContainer className={cn({ isActive: hasText })}>
        <Input
          type="text"
          value={value}
          onChange={handleInputChange}
        />
        <CloseBtn onClick={onClose}><IoClose /></CloseBtn>
      </InputContainer>
      {
        hasText && (
          <DropDown
            options={options}
            handleBox={handleDropDownClick}
          />
        )
      }
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
`;

const InputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 600px;
  height: 45px;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 1rem 1rem 1rem 1rem;
  overflow: hidden;
  &.isActive {
    border-radius: 1rem 1rem 0 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: 0;
  border: 0;
  padding: 1rem;
`;

const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 42px;
  height: 35px;
  font-size: 20px;
`;

export default AutoComplete;
