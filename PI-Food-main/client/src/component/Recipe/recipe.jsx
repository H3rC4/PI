import style from './recipe.module.css'
import { Link } from 'react-router-dom';
const Recipe = (props)=>{
    const {id, image, title, diets} = props;
 return(
    <div className={style.recipe}>
       <Link to={`/detail/${id}`}><p>{title} </p> </Link>
        <img  src={image} alt="" />
        <p>{diets}</p>
    </div>
 )
}
export default Recipe;