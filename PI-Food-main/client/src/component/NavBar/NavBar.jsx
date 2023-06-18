import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPage } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();

  const paginado = useSelector((state)=> state.paginado)
  const handleHomeClick = () => {
    if(paginado>1){
    dispatch(resetPage());
  }
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
