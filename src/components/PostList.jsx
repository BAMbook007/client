import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, text, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }

  return (
    <div className="post_colum">
      <h1 style={{ textAlign: "center" }}>{text}</h1>
      <TransitionGroup className="post_post">
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} className="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
