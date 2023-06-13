import Recipe from '../Recipe/recipe'
import style from './RecipesContainer.module.css'
import {useSelector} from 'react-redux'

const RecipesContainer = ()=>{
 //aca estoy pidiendo al state el array recetas
const recetas = useSelector(state=>state.recetas); 

    return(
    <div className={style.container}>
    {recetas.map((el)=>{
        return <Recipe
        className={style.item}
        id = {el.id}
        title = {el.title}
        image = {el.image}
        diets = {el.diets}

        /> 
    })}
    </div>
 )
}
export default RecipesContainer;