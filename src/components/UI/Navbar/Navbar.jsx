import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    <div className="box_1">
      <div className="navbar">
        {isAuth && <Link to="/about">О сайте</Link>}
        {isAuth && <Link to="/posts">Посты</Link>}
        {!isAuth && <Link to="/auth">Авторизация</Link>}
      </div>
    </div>
  );
};

export default Navbar;
