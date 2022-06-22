import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="posts" element={<Posts />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
