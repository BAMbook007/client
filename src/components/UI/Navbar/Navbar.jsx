import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="box_1">
      <div className="navbar">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
        <Link to="/auth">Авторизация</Link>
      </div>
    </div>
  );
};

export default Navbar;
