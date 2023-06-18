import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { useEffect } from "react";
import { nextPage } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAll());
  // }, [dispatch]);

  const handleHomeClick = () => {
    dispatch(nextPage(0));
  };

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/home" activeClassName={style.active} onClick={handleHomeClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-recipe" activeClassName={style.active}>
            Add Recipe
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
