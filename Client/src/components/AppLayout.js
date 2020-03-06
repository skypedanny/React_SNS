import React from "react";

import { Menu, Input } from "antd";

const AppLayout = () => {
  return (
    <div>
      <Menu>
        <Menu.Item key="home">Twitter</Menu.Item>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AppLayout;
