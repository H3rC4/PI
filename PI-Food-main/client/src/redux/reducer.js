import {GET_ALL, GET_NAME} from './actionType'


const initialstate = {
    recetas:[],
    recetasName:[]
};

const reducer = (state = initialstate , action) =>{
switch (action.type) {
    case GET_ALL:
        return{
            ...state,
            recetas: action.payload,
            recetasName : action.payload,
        };
    case GET_NAME:
        return{
            ...state,
            recetasName : action.payload
        };
    

    default:
      return {...state};
}
};

export default reducer;