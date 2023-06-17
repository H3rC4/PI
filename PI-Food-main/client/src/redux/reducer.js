import {GET_ALL, GET_NAME, ORDER, ORDER_ALFA, ORDER_API} from './actionType'


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
        case ORDER:
      const allRecipeOrdered = [...state.recetas];
      return {
        ...state,
        recetasName:
          action.payload === "A"
            ? allRecipeOrdered.sort((a, b) => a.health - b.health)
            : allRecipeOrdered.sort((a, b) => b.health - a.health),
      };
        case ORDER_ALFA:
      const allRecipeOrderedAlfa = [...state.recetas];
      return {
        ...state,
        recetasName:
          action.payload === "A"
            ? allRecipeOrderedAlfa.sort((a, b) => a.name.localeCompare(b.name))
            : allRecipeOrderedAlfa.sort((a, b) => b.name.localeCompare(a.name)),
      };
        case ORDER_API:
      const stateCopy = [...state.recetas];
      const fromApi = stateCopy.filter((a)=> a.api===true)
      const fromDataBase = stateCopy.filter((a)=> !a.api)
      
      return {
        ...state,
        recetasName:
          action.payload === "A"
            ? fromApi
            : fromDataBase,
      };
    
    default:
      return {...state};
}
};

export default reducer;