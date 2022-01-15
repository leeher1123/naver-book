import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { API } from '../../../api';
import BookList from '../../home/components/BookList';
import GridList from '../../shared/components/list/GridList';

const SearchContainer = () => {
  const { query } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const result = await API('/v1/search/book.json', 'get', {
      query,
      display: 5,
    });
    setMovie(result.data.items);
  };
  useEffect(() => {
    getMovie();
  }, [query]);
  return (
    <Container>
      <GridList data={movie}>
        {(item) => <BookList item={item} />}
      </GridList>
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchContainer;
