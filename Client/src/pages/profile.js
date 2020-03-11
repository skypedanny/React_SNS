import React from "react";

import { Button, List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import NicknameEditForm from "components/NicknameEditForm";

const profile = () => {
  return (
    <div>
      <NicknameEditForm />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Follower List</div>} 
        loadMore={<Button style={{ width: '100%' }}>More</Button>}
        bordered
        dataSource={['Daehun', 'Handsome', 'He is rich']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<StopOutlined key="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Following List</div>} 
        loadMore={<Button style={{ width: '100%' }}>More</Button>}
        bordered
        dataSource={['Daehun', 'Handsome', 'He is rich']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<StopOutlined key="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default profile;
