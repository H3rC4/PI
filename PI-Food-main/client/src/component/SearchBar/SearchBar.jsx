
import style from './SearchBar.module.css';
import { useState } from 'react';
import { getByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const dispatch = useDispatch();


  const handleSearch = () => {
    dispatch(getByName(name));
  };

  return (
    <div className={style.contenedor}>
      <input type="search" onChange={handleChange} name="name" />
      <button onClick={handleSearch}>Buscar receta</button>
    </div>
  );
};

export default SearchBar;
