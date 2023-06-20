import style from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { getByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const NavBar = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(getByName(name));
  };

  const isAddRecipePage = location.pathname === "/add-recipe";

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/home" activeClassName={style.active} >
            Home
          </Link>
        </li>

        <li>
          <Link to="/add-recipe" activeClassName={style.active}>
            Add Recipe
          </Link>
        </li>
        
        {!isAddRecipePage && (
          <li className={style.contenedor}>
            <input type="search" onChange={handleChange} name="name" />
            <button onClick={handleSearch}>
              Buscar receta
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
