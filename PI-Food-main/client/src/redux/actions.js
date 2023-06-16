import axios from 'axios';
import {GET_ALL,GET_NAME} from './actionType'

// este es el action creator que tiene q
//retornar una funcion tiene q despachar la action
export const   getAll = () =>{
    return async function(dispatch) {
        const serverData = await axios.get("http://localhost:3001/food/recipes")
        const recipes = serverData.data
        dispatch({type: GET_ALL, payload:recipes })
    }
}

export const getByName = (name) =>{

return async function(dispatch) {
    const {data} = await axios.get(`http://localhost:3001/food/recipes?name=${name}`)
    dispatch({type: GET_NAME, payload:data })
 

}

}

