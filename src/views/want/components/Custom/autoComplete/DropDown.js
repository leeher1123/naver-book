import React from 'react';
import styled from 'styled-components';

const DropDown = ({ options, handleBox }) => {
  const a = 1;
  return (
    <Container>
      {
        options.map((option) => (
          <DropDownItem onClick={() => handleBox(option)}>{option}</DropDownItem>
        ))
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  margin: 0 auto;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  padding: 0.5rem 0;
`;

const DropDownItem = styled.div`
  padding: 8px;
  &:hover {
    background: #eee;
    cursor: pointer;
  }
`;

export default DropDown;
