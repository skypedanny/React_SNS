import React from "react";

import { Card } from 'antd';

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="post">
          Post
          <br />
          {dummy.Post.length}
        </div>,
        <div key="follower">
          follower
          <br />
          {dummy.Followers.length}
        </div>,
        <div key="following">
          following
          <br />
          {dummy.Followings.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

export default UserProfile;
