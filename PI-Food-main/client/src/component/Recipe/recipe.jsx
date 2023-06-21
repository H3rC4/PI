import style from './recipe.module.css'
import { Link } from 'react-router-dom';
const Recipe = (props)=>{
    const {id, image, name, diets} = props;
 return(
    <div className={style.recipe}>
        <img  src={image} alt="" />
       <Link to={`/detail/${id}`}><h4>{name} </h4> </Link>
        <ul>DIETS:</ul>
        <ul>
       {diets && diets.map((e)=><li>{e}</li>)}
       </ul>
    </div>
 )
}
export default Recipe;