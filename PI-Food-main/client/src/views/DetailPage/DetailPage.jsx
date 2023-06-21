import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './DetailPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../redux/actions'


const DetailPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])
  const recipeDB = useSelector((state) => state.recipeDetail[0])
  const recipeApi = useSelector((state) => state.recipeDetail)
  const recipe = recipeDB ? recipeDB : recipeApi

  return (
    <div className={style.card}>
      <div className={style.recipeCard}>
        <img src={recipe.image} alt={recipe.name} className={style.recipeImage} />
        <div className={style.recipeInfo}>
          <h2>{recipe.name && recipe.name}</h2>
          <p>{recipe.resume && recipe.resume}</p>
          <p>Health Score: {recipe.health && recipe.health}</p>
          <h3>Paso a Paso:</h3>
          <ol>{typeof recipe.paso === 'string'
            ? <li>{recipe.paso}</li>
            :''
          }
          {recipe.paso && typeof recipe.paso !== 'string' && recipe.paso.map((ele) => (
                <li>{ele.step}</li>
            ))}
          </ol>
          <p>Tipos de dieta: </p>
          {
            recipe.diets && recipe.diets.map((elem) => <p>{elem}</p>)
          }
        </div>
      </div>
    </div>
  )
}
export default DetailPage;