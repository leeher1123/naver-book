import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Pagination } from '@mui/material';

import { API } from '../../../api';
import BookList from '../../home/components/BookList';
import GridList from '../../shared/components/list/GridList';

const SearchContainer = () => {
  const { query } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const result = await API('/v1/search/book.json', 'get', {
      query,
      display: 12,
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
      <PageSection>
        <Pagination count={10} variant="outlined" />
      </PageSection>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PageSection = styled.div`
  padding-top: 50px;
`;

export default SearchContainer;
