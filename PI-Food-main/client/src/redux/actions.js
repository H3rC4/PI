import axios from 'axios';
import {GET_ALL, GET_NAME, ORDER, ORDER_ALFA, ORDER_API, NEXT, PREV, RESET,GET_DIETS} from './actionType'
import {modificatedResults} from './los100'
// este es el action creator que tiene q
//retornar una funcion tiene q despachar la action
export const   getAll = () =>{
    return async function(dispatch) {
        // const serverData = await axios.get("http://localhost:3001/food/recipes")
        // const recipes = serverData.data
        const recipes = modificatedResults//!despues hay q borrar eso----
        dispatch({type: GET_ALL, payload:recipes })
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
export const resetPage = () => {
  return {
   type: RESET, 
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

