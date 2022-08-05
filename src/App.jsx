import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";


function App() {
  /* const {store} = useContext(Context);

useEffect(() => {
  if (localStorage.getItem('token')) {
    store.checkAuth()
  }
}, []) */

  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>      
    </BrowserRouter>
  );
};

export default observer(App);