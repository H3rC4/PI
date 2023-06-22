import axios from 'axios';
import {
  GET_ALL, 
  GET_NAME, 
  ORDER, 
  ORDER_ALFA, 
  ORDER_API, 
  NEXT, 
  PREV, 
  GET_DIETS,
  FIND_DIETS,
  GET_DETAIL,
  DELETE_RECIPE
} from './actionType'
// import {modificatedResults} from './los100'
// este es el action creator que tiene q
//retornar una funcion tiene q despachar la action
export const   getAll = () =>{
    return async function(dispatch) {
        const serverData = await axios.get("http://localhost:3001/food/recipes")
         const recipes = serverData.data
          // const recipes = modificatedResults

        dispatch({type: GET_ALL, payload:recipes })
    }
}


export const getDetail = (id) => {
  return async function (dispatch){
      const {data} = await axios.get(`http://localhost:3001/food/recipes/${id}`)
      
      dispatch({type: GET_DETAIL, payload: data})
  }
}



export const deleteRecipe = (id) => {
  console.log(id)
  return async function (dispatch){
    axios
    .delete(`http://localhost:3001/food/recipes/${id}`)
    .then((res) => alert(res.data))
    .catch((err) => alert(err));
    dispatch({type: DELETE_RECIPE, payload: id})
}
}
export const postForm = (form) => {
  return async function (){
    axios
    .post('http://localhost:3001/food/recipes', form)
    .then((res) => alert(res.data))
    .catch((err) => alert(err));

}
}

export const getByName = (name) =>{

return async function(dispatch) {
    const {data} = await axios.get(`http://localhost:3001/food/recipes?name=${name}`)
    dispatch({type: GET_NAME, payload:data })
}
}
export const getDiets = () =>{

return async function(dispatch) {
    const {data} = await axios.get(`http://localhost:3001/food/diets`)
    dispatch({type: GET_DIETS, payload:data })
}
}

export const nextPage = () => {
  return {
   type: NEXT, 
}
}
export const prevPage = () => {
  return {
   type: PREV, 
}
}

export const orderRecipes = (orden) => {
    return {
      type: ORDER,
      payload: orden,
    };
}
export const orderAlfaRecipes = (orden) => {
    return {
      type: ORDER_ALFA,
      payload: orden,
    };
}
export const IsFromApi = (orden) => {
    return {
      type: ORDER_API,
      payload: orden,
    };
}
export const filterDiets = (orden) => {
  return {
    type: FIND_DIETS,
    payload: orden,
  };
}
