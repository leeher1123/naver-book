import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { API } from '../../../api';

const HomeContainer = () => {
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const result = await API('/v1/search/book.json', 'get', {
      query: '소설',
      display: 5,
    });
    setMovie(result.data.items);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <Container>
      <div>
        {
          movie.map((item) => (
            <>
              <div>{item.title}</div>
              <img src={item.image} alt="" />
            </>
          ))
        }
      </div>
    </Container>
  );
};

const Container = styled.div`

`;

export default HomeContainer;
