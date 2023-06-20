import style from './recipe.module.css'
import { Link } from 'react-router-dom';
const Recipe = (props)=>{
    const {id, image, name, diets} = props;
 return(
    <div className={style.recipe}>
        <img  src={image} alt="" />
       <Link to={`/detail/${id}`}><h4>{name} </h4> </Link>
       {diets.map((e)=><p>{e}</p>)}
    </div>
 )
}
export default Recipe;