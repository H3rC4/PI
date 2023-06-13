import style from "./NavBar.module.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className={style.nav}>
    <ul>
      <li><Link to="/home" activeClassName={style.active}>Home</Link></li>
      <li><Link to="/add-recipe" activeClassName={style.active}>Add Recipe</Link></li>
      <li><Link to="/search" activeClassName={style.active}>Search</Link></li>
    </ul>
  </nav>
  );
};

export default NavBar;