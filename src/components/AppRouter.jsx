import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routes } from "../router";
import Auth from "../pages/Auth";
import {useSelector} from "react-redux"

const AppRouter = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    <Routes>
      {isAuth && <Route path="about" element={<About />} />}
      {isAuth && <Route path="posts" element={<Posts />} />}
      {!isAuth && <Route path="auth" element={<Auth />} />}
      <Route path="*" element={<Auth />} />
    </Routes>
  );
};

export default AppRouter;
