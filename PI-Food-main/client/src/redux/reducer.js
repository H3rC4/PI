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
  GET_DETAIL
} from './actionType'

const initialstate = {
    recetas:[],
    recetasName:[],
    current:-9,
    paginado:0,
    diets:[],
    recipeDetail:[]
};

const reducer = (state = initialstate , action) =>{
switch (action.type) {
    case GET_ALL:
        return{
            ...state,
            recetas: action.payload,
            recetasName : action.payload,
        };
    case GET_DETAIL:
        return{
            ...state,
            recipeDetail:action.payload
        };
    case GET_NAME:
        return{
            ...state,
            recetasName : action.payload
        };
    case GET_DIETS:
        return{
            ...state,
            diets : action.payload
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

      case FIND_DIETS:
        const orderedByDiet = [...state.recetas];
        return {
          ...state,
          recetasName: orderedByDiet.filter((e) => e.hasOwnProperty('diets') && e.diets.includes(action.payload))
              
        }; 

      case NEXT:
        let indexNext = state.current+9
        let paginadoNext = state.recetas.slice(indexNext, indexNext + 9 )
        return {
            ...state,
            recetasName: paginadoNext,
            current:state.current +9,
            paginado:state.paginado+1
        } 
      case PREV:
        let indexPrev = state.current-9
        let paginadoPrev = state.recetas.slice(indexPrev, indexPrev + 9 )
        return {
            ...state,
            recetasName: paginadoPrev,
            current:state.current -9,
            paginado:state.paginado-1

        } 
   
        
    default:
      return {...state};
}
};

export default reducer;