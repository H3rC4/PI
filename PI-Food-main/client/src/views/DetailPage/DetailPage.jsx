import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './DetailPage.module.css'

const DetailPage = () => {

    const {id} = useParams()
    const [recipe, setRecipe] = useState({});
   
    useEffect(  () => {
            axios(`http://localhost:3001/food/recipes/${id}`).then(({ data }) => {
                setRecipe(data);
            });
    },[id])   
    console.log(recipe)
     return (
        <div className={style.card}>
        <div className={style.recipeCard}>
          <img src={recipe.image} alt={recipe.name} className={style.recipeImage} />
          <div className={style.recipeInfo}>
            <h2>{recipe.name}</h2>
            <p>{recipe.resume}</p>
            <p>Health Score: {recipe.health}</p>
            <h3>Paso a Paso:</h3>
            <ol>
                
            {recipe.paso && recipe.paso.length > 0 && recipe.paso[0].steps && (
  <ol>
    {recipe.paso[0].steps.map((ele) => (
      <li>{ele.step}</li>
    ))}
  </ol>
)}
          </ol>
            <p>Tipos de dieta: {recipe.diets}</p>
          </div>
        </div>
      </div>
    )
}
export default DetailPage;