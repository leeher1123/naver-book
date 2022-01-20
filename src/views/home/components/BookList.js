import React, { useState } from 'react';
import styled from 'styled-components';

const BookList = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Contents>
        <Image>
          <img src={item.image} alt="" />
        </Image>
        <h2>{item.title}</h2>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid rgba(40, 50, 60, 0.19);
  background: #F9F9FC;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding: 14px 10px 0 0;
  }
`;

const Image = styled.div`
  width: 124px;
  height: 167px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default BookList;
