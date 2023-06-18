import style from './recipe.module.css'
import { Link } from 'react-router-dom';
const Recipe = (props)=>{
    const {id, image, name, diets} = props;
 return(
    <div className={style.recipe}>
        <img  src={image} alt="" />
       <Link to={`/detail/${id}`}><h2>{name} </h2> </Link>
        <h2>{diets}</h2>
    </div>
 )
}
export default Recipe;