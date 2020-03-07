import React from "react";
import Link from 'next/link';

import { Menu, Input, Button } from "antd";

const AppLayout = ({children}) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>SNS</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>profile</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={ { verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
      {children}
    </div>
  );
};

export default AppLayout;
