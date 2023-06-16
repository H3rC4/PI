import React, { useState } from 'react';
import style from './FormPage.module.css';
import validate from './validate';
import axios from 'axios';

const FormPage = () => {
  const [form, setForm] = useState({
    name: '',
    resumen: '',
    paso: '',
    health: '',
    image: '',
    diets: [],
  });

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
          <label>HealdScore</label>
          <input type="number" name="health" value={form.heald} onChange={changeHandler} />
          {errors.e7 && <p>{errors.e7}</p>}
          {errors.e8 && <p>{errors.e8}</p>}
        </div>

        <div>
          <label>Diets</label>
          <div className={style.dietsContainer}>
            <div>
              <label>gluten free</label>
              <input
                type="checkbox"
                value="gluten free"
                name="diets"
                checked={form.diets.includes('gluten free')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>dairy free</label>
              <input
                type="checkbox"
                value="dairy free"
                name="diets"
                checked={form.diets.includes('dairy free')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>lacto ovo vegetarian</label>
              <input
                type="checkbox"
                value="lacto ovo vegetarian"
                name="diets"
                checked={form.diets.includes('lacto ovo vegetarian')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>vegan</label>
              <input
                type="checkbox"
                value="vegan"
                name="diets"
                checked={form.diets.includes('vegan')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>paleolithic</label>
              <input
                type="checkbox"
                value="paleolithic"
                name="diets"
                checked={form.diets.includes('paleolithic')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>primal</label>
              <input
                type="checkbox"
                value="primal"
                name="diets"
                checked={form.diets.includes('primal')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>whole 30</label>
              <input
                type="checkbox"
                value="whole 30"
                name="diets"
                checked={form.diets.includes('whole 30')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>pescatarian</label>
              <input
                type="checkbox"
                value="pescatarian"
                name="diets"
                checked={form.diets.includes('pescatarian')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>ketogenic </label>
              <input
                type="checkbox"
                value="ketogenic"
                name="diets"
                checked={form.diets.includes('ketogenic')}
                onChange={dietChangeHandler}
              />
            </div>
            <div>
              <label>fodmap friendly </label>
              <input
                type="checkbox"
                value="fodmap friendly"
                name="diets"
                checked={form.diets.includes('fodmap friendly')}
                onChange={dietChangeHandler}
              />
            </div>
          </div>
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

        <button type="submit">Agregar Receta</button>
      </div>
    </form>
  );
};

export default FormPage;
