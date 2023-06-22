import { useState, useEffect } from 'react';
import style from './FormPage.module.css';
import validate from './validate';
import { useDispatch } from 'react-redux';
import { getDiets } from '../../redux/actions'
import { useSelector } from 'react-redux';
import { postForm } from '../../redux/actions'

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
      setForm({ ...form, diets: [...form.diets, value] });
      setErrors({ ...errors, e6: '' })
    } else {
      setForm({ ...form, diets: form.diets.filter((diet) => diet !== value) });
      if(form.diets.length === 1){
      setErrors({ ...errors, e6: 'Debe ingresar un tipo de dieta' });
    }}
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postForm(form));
    setForm({
      name: '',
      resumen: '',
      paso: '',
      health: '',
      image: '',
      diets: [],
    })
  };
  const isFormValid = Object.keys(errors).length > 0 || Object.values(form).some(value => value === '');

  return (
    <div className={style.container}>
      <form onSubmit={submitHandler} className={style.form}>
        <div className={style.formContainer}>
          <div>
            <label>Receta</label>
            <input type="text" name="name" value={form.receta} onChange={changeHandler} />
            {errors.e1 && <p>{errors.e1}</p>}
          </div>

          <div>
            <label>Resumen</label>
            <textarea type="text" name="resumen" value={form.resumen} onChange={changeHandler} />
            {errors.e2 && <p>{errors.e2}</p>}
          </div>

          <div>
            <label>Pasos a seguir</label>
            <textarea type="text" name="paso" value={form.paso} onChange={changeHandler} />
            {errors.e3 && <p>{errors.e3}</p>}
          </div>

          <div>
            <label>Health Score</label>
            <input type="number" name="health" value={form.health} onChange={changeHandler} inputMode="numeric" />          {errors.e4 && <p>{errors.e4}</p>}
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
            {errors.e5 && <p>{errors.e5}</p>}
          </div>

          <div className={style.diets}>
            <label>Diets:</label>
            <div className={style.dietsContainer}>
              {diets.map((e) => {
                const id = String(e.id); 
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
              {errors.e6 && <p>{errors.e6}</p>}
          </div>

          <div>
            <button type="submit" disabled={isFormValid}>
              Add Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
