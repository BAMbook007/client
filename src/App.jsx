import { BrowserRouter, Link, Route, Routes, } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { useDispatch } from "react-redux";
import { auth } from "./components/actions/user";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch()


/* useEffect(() => {
  dispatch(auth())
}, []) */

  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>      
    </BrowserRouter>
  );
};

export default App;
