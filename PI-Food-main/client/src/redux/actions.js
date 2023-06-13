import axios from 'axios';
import {GET_ALL, GET_ID} from './actionType'

// este es el action creator que tiene q
//retornar una funcion tiene q despachar la action
export const   getAll = () =>{
    return async function(dispatch) {
        const serverData = await axios.get("http://localhost:3001/food/recipes")
        const recipes = serverData.data
        dispatch({type: GET_ALL, payload:recipes })
    }
}

export const getById = (id) =>{
    return async function(dispatch) {
        const recipe = await axios.get(`http://localhost:3001/food/recipes/${id}`);
        const recipes = recipe.data
        dispatch({type: GET_ID, payload:recipes})
    }
}

