import React from "react";

import PostForm from "components/PostForm";
import PostCard from "components/PostCard";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "danny"
      },
      content: "I love you babe",
      img: "https://pbs.twimg.com/media/DvbOFSDUUAEj0RU.jpg"
    }
  ]
};

const Home = () => {
  return (
    <>
      <div>
        {dummy.isLoggedIn && <PostForm />}
        {dummy.mainPosts.map((c) => {
          return <PostCard key={c} post={c} />;
        })}
      </div>
    </>
  );
};

export default Home;
