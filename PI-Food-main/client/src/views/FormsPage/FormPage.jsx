import { useState } from 'react';
import style from './FormPage.module.css';
import validate from './validate'
import axios from 'axios'

const FormPage = () => {

    const [form,setForm] = useState({
        name: '',
        resumen:'',
        paso:'',
        health:'',
        image:''

    })
    const [errors,setErrors] = useState({})
   
   const changeHandler = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
       
// aca al validte() se le pasa lo mismo q al estate de forma
// para evitar el desfasaje del tipeo       
        setErrors(validate({...form, [property]:value}))
      
        setForm({...form, [property]:value});
    }

    const submitHandler = (event)=>{
         event.preventDefault();
       
      axios.post('http://localhost:3001/food/recipes',form)
      .then(res=>alert(res.data))
      .catch(err=>alert(err.data))
    
    }


    return (
        <form onSubmit={submitHandler} className={style.form} >
            <div className={style.container} >
                <div>
                    <label >Receta</label>
                    <input type='text' name='name'  value={form.receta}  onChange={changeHandler}/>
                    {errors.e1 && <p>{errors.e1}</p>}
                    {errors.e2 && <p>{errors.e2}</p>}
                </div>

                <div>
                    <label >Resumen</label>
                    <input type='text' name="resumen" value={form.resumen} onChange={changeHandler} />
                    {errors.e3 && <p>{errors.e3}</p>}
                    {errors.e4 && <p>{errors.e4}</p>}

                </div>
                <div>
                    <label >Pasos a seguir</label>
                    <input type='text' name="paso" value={form.pasos} onChange={changeHandler}/>
                    {errors.e5 && <p>{errors.e5}</p>}
                    {errors.e6 && <p>{errors.e6}</p>}

                </div>
                <div>
                    <label >HealdScore</label>
                    <input type='number' name="health" value={form.heald} onChange={changeHandler}/>
                    {errors.e7 && <p>{errors.e7}</p>}
                    {errors.e8 && <p>{errors.e8}</p>}

                </div>
                <div>
                    <label >Imagen</label>
                    <input type='text' placeholder="url de la imagen" name='image'  value={form.imagen} onChange={changeHandler}/>
                    {errors.e9 && <p>{errors.e9}</p>}
                    {errors.e10 && <p>{errors.e10}</p>}

                </div>
                <button type='submit'>Agregar Receta</button>
            </div>
        </form>
    )
};
export default FormPage;