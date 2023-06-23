import Recipe from '../Recipe/recipe'
import style from './RecipesContainer.module.css'
import {useSelector} from 'react-redux'

const RecipesContainer = ()=>{
 //aca estoy pidiendo al state el array recetas
const recetas = useSelector(state=>state.recetasName); 
    return(
    <div className={style.container}>
    {recetas.map((el)=>{
        return <Recipe
        key={el.id&&el.id}
        className={style.item}
        id = {el.id&&el.id}
        name = {el.name&&el.name}
        image = {el.image&&el.image}
        diets = {el.diets&&el.diets}
        api={el.api&&el.api}
        /> 
    })}
    </div>
 )
}
export default RecipesContainer;