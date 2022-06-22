import React from "react";
import {
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLocation,
  useMatch,
  useNavigate,
  useNavigationType,
  useParams,
  useRoutes,
} from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>{props.post.title}</strong>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}>открыть</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
