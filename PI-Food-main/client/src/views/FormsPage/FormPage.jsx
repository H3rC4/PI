import { useState, useEffect } from 'react';
import style from './FormPage.module.css';
import validate from './validate';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getDiets } from '../../redux/actions'
import { useSelector } from 'react-redux';

const FormPage = () => {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getDiets()) }, [dispatch])

  const diets = useSelector((state) => state.diets)

  const [form, setForm] = useState({
    name: '',
    resumen: '',
    paso: '',
    health: '',
    image: '',
    diets: [],
  });
  console.log(form);
  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setErrors(validate({ ...form, [property]: value }));

    setForm({ ...form, [property]: value });
  };

  const dietChangeHandler = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Agregar el tipo de dieta seleccionado
      setForm({ ...form, diets: [...form.diets, value] });
    } else {
      // Remover el tipo de dieta deseleccionado
      setForm({ ...form, diets: form.diets.filter((diet) => diet !== value) });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:3001/food/recipes', form)
      .then((res) => alert(res.data))
      .catch((err) => alert(err.data));
  };
  const isFormValid = Object.keys(errors).length > 0 || Object.values(form).some(value => value === '');

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div className={style.container}>
        <div>
          <label>Receta</label>
          <input type="text" name="name" value={form.receta} onChange={changeHandler} />
          {errors.e1 && <p>{errors.e1}</p>}
          {errors.e2 && <p>{errors.e2}</p>}
        </div>

        <div>
          <label>Resumen</label>
          <input type="text" name="resumen" value={form.resumen} onChange={changeHandler} />
          {errors.e3 && <p>{errors.e3}</p>}
          {errors.e4 && <p>{errors.e4}</p>}
        </div>

        <div>
          <label>Pasos a seguir</label>
          <input type="text" name="paso" value={form.paso} onChange={changeHandler} />
          {errors.e5 && <p>{errors.e5}</p>}
          {errors.e6 && <p>{errors.e6}</p>}
        </div>

        <div>
          <label>Health Score</label>
          <input type="text" name="health" value={form.health} onChange={changeHandler} inputMode="numeric" pattern="[0-9]*" />
          {errors.e7 && <p>{errors.e7}</p>}
          {errors.e8 && <p>{errors.e8}</p>}
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="text"
            placeholder="url de la imagen"
            name="image"
            value={form.imagen}
            onChange={changeHandler}
          />
          {errors.e9 && <p>{errors.e9}</p>}
          {errors.e10 && <p>{errors.e10}</p>}
        </div>

        <div>
          <label>Diets</label>
          <div className={style.dietsContainer}>
            {diets.map((e) => {
              const id = String(e.id); // convertir el ID en una cadena
              return (
                <div key={e.id}>
                  <label>{e.name}</label>
                  <input
                    type="checkbox"
                    value={id}
                    name="diets"
                    checked={form.diets.includes(id)}
                    onChange={dietChangeHandler}
                  />
                </div>
              );
            })}
          </div>
        </div>


        <button type="submit" disabled={isFormValid}>
           Agregar Receta
        </button>

      </div>
    </form>
  );
};

export default FormPage;
