import React from 'react';
import styled from 'styled-components';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const { Item } = List;
const { Meta } = Card;

const FollowList = ({ header, data }) => {
  const a = 1;
  return (
    <Container>
      <List
        style={{ marginBottom: 20 }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>{header}</div>}
        loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더 보기</Button></div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <Item style={{ marginTop: '20px' }}>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Meta description={item.nickname} />
            </Card>
          </Item>
        )}
      />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #767676;
  margin-bottom: 10px;
  padding: 10px;
`;

export default FollowList;
