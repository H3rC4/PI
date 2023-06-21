import { useDispatch } from 'react-redux';
import style from './recipe.module.css'
import { Link } from 'react-router-dom';
import {deleteRecipe} from '../../redux/actions'
const Recipe = (props)=>{
    const {id, image, name, diets, api} = props;
 const dispatch = useDispatch()
 const deleteHandler = (id)=>{
   dispatch(deleteRecipe(id))
 }
 
    return(
    <div className={style.recipe}>
       <Link to={`/detail/${id}`}> <img  src={image} alt="" />
       <h4>{name} </h4> </Link>
        <ul>DIETS:</ul>
        <ul>
       {diets && diets.map((e)=><li key ={e}>{e}</li>)}
       </ul>
       {!api && <button onClick={deleteHandler}>X</button> }
    </div>
 )
}
export default Recipe;