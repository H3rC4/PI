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
  DELETE_RECIPE,
  BUTTOMS,
  POST,
  RECET_DETAIL
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

export const buttomsPage = (index,page) => {
  return {
   type: BUTTOMS,
   payload: {index,page},
 
}}
export const getDetail = (id) => {
  return  function (dispatch){
      fetch(`http://localhost:3001/food/recipes/${id}`)
      .then(response=>{
        if(!response){
          throw new Error(`Error de red ${response.status}`)
        }
        return response.json();
      })
      .then(data => {
        dispatch({type: GET_DETAIL, payload: data})
      })
      .catch(error => {
        return error.json
      })
      
  }
}
export const resetDetail = () => {
  return  function (dispatch){
    dispatch({type: RECET_DETAIL})
  }
  }


export const deleteRecipe = (id) => {
  return async function (dispatch){
    axios
    .delete(`http://localhost:3001/food/recipes/${id}`)
    .then((res) => alert(res.data))
    .catch((err) => alert(err));
    dispatch({type: DELETE_RECIPE, payload: id})
}
}
export const postForm = (form) => {
  return async function (dispatch){
   const {data} = await axios
    .post('http://localhost:3001/food/recipes', form)
    .catch((err) => alert(err));
     alert('tu receta se creo correctamente')
    dispatch({type: POST, payload: data})

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
