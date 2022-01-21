import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostCardContent = ({ postData }) => {
  console.log(postData);
  return ( // 해시태그인 것과 아닌 것을 구분한다.
    <Container>
      {postData.split(/(#[^s#]+)/g).map((v, i) => {
        if (v.match(/(#[^s#]+)/)) {
          // eslint-disable-next-line react/no-array-index-key
          return <Link to={`/hashtag/${v.slice(1)}`} key={i}>{v}</Link>;
        } // 바뀔 가능성이 없는 배열 대이터는 key 값으로 index 사용해도 된다.
        return v;
      })}
    </Container>
  );
};

const Container = styled.div`

`;

export default PostCardContent;
