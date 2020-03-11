import React from "react";
import PropTypes from 'prop-types';

import { Card, Button, Avatar } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageFilled , EllipsisOutlined } from '@ant-design/icons';

const PostCard = ({ post }) => {
  return (
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <RetweetOutlined />,
        <HeartOutlined />,
        <MessageFilled />,
        <EllipsisOutlined />
      ]}
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
  );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object
    })
};

export default PostCard;
