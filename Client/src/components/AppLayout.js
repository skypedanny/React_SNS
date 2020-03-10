import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { Menu, Input, Button, Row, Col, Card, Avatar } from "antd";

const dummy = {
  nickname: "Danny",
  Post: [],
  Followings: [],
  Followers: [] 
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>SNS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          <Card 
            actions={[
              <div key="post">Post<br />{dummy.Post.length}</div>,
              <div key="follower">follower<br />{dummy.Followers.length}</div>,
              <div key="following">following<br />{dummy.Followings.length}</div>
            ]}>
            <Card.Meta
              avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
              title={dummy.nickname}
            />
          </Card>
          <Link href="/signup">
            <a>
              <Button>Sign Up</Button>
            </a>
          </Link>
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          세 번째
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
