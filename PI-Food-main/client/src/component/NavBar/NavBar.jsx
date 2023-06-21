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

  const isHomePage = location.pathname === "/home";
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/home" activeClassName={style.active} >
           <button>Home</button> 
          </Link>
        </li>

        <li>
          <Link to="/add-recipe" activeClassName={style.active}>
           <button>Add Recipe</button> 
          </Link>
        </li>
        {isHomePage &&  (
          <li>
          <input type="search" onChange={handleChange} name="name" />
        </li>)}
        {isHomePage && (
          <li className={style.contenedor}>
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
