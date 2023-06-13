import {GET_ALL, GET_ID} from './actionType'


const initialstate = {
    recetas:[],
    id:{}
};

const reducer = (state = initialstate , action) =>{
switch (action.type) {
    case GET_ALL:
        return{
            ...state,
            recetas : action.payload
        };
        case GET_ID:
            return{
                ...state,
                id : action.payload
            };
    

    default:
      return {...state};
}
};

export default reducer;