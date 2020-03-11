import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { Menu, Input, Row, Col } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from './UserProfile';

const dummy = {
  nickname: "Danny",
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
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
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          Handsome Daehun
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
