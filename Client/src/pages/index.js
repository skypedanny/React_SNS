import React from "react";
import { Form, Input, Button, Card, Icon, Avatar } from "antd";
import { RetweetOutlined, HeartOutlined, MessageFilled, EllipsisOutlined } from '@ant-design/icons';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'danny',
    },
    content: 'I love you babe',
    img: 'https://pbs.twimg.com/media/DvbOFSDUUAEj0RU.jpg'
  }],

}

const Home = () => {
  return (
    <>
      <div>
        {dummy.isLoggedIn && <Form style={{ marginBottom: 30 }}  encType="multipart/form-data">
          <Input.TextArea maxLength={140} placeholder="What happened?" />
          <div>
            <Input type="file" multiple hidden />
            <Button>Image Upload</Button>
            <Button type="primary" style={{ float: 'right'}} htmlType="submit">Post</Button>
          </div>
          <div>
            {dummy.imagePaths.map((v, i) => {
              return ( 
                <div key={v} style={{ display: 'inline-block' }}>
                  <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                  <div>
                    <Button>Delete</Button>
                  </div>
                </div>
              )
            })}
          </div>
        </Form>}
        {dummy.mainPosts.map((c) => {
          return (
            <Card
              key={+c.createdAt}
              cover={c.img && <img alt="example" src={c.img} />}
              actions={[
                <RetweetOutlined/>,
                <HeartOutlined />,
                <MessageFilled />,
                <EllipsisOutlined />
              ]}
              extra={<Button>Follow</Button>}
            >
              <Card.Meta
                avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                title={c.User.nickname}
                description={c.content}
              />
            </Card>
          )
        })}
      </div>
    </>
  );
};

export default Home;
