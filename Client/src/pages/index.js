import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import PostForm from "components/PostForm";
import PostCard from "components/PostCard";

import { mainPosts } from 'reducers/post';

const Home = () => {
  //잘게 쪼개기
  //const user = useSelector(state => state.user.user);
  //const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  //한번에 하기
  const { user, isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <>
      <div>
        {isLoggedIn && <PostForm />}
        {mainPosts.map(c => {
          return <PostCard key={c} post={c} />;
        })}
      </div>
    </>
  );
};

export default Home;
