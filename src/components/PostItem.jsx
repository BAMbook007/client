import React from "react";

const PostItem = (props) => {
  console.log(props)
  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.post.text}</strong>
        </div>
        <div className="post__btns">
        <strong>{props.post.user}</strong>
          {/* <MyButton onClick={() => props.remove(props.post)}>открыть</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton> */}
        </div>
      </div>
  );
};

export default PostItem;
