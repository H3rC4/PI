import style from './Home.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { useState, useEffect} from 'react'
import RecipesContainer from '../../component/RecipesContainer/RecipesContainer';
import Paginado from '../../component/Paginado/Paginado';
// importar las actions q queremos despacahar
import { orderRecipes, orderAlfaRecipes,IsFromApi,filterDiets, getAll, nextPage } from '../../redux/actions'

const Home = () => {

    const dispatch = useDispatch()
    /*con useEffect le vamos a decir q cuando se monte el
    componente o haya un cambio en el array de dependencias
    ejecute la funcion
    */
    const recipes = useSelector((state) => state.recetasName)
    const currentPage = useSelector((state) => state.paginado)

   
    useEffect(() => { 
        if(!recipes.length){dispatch(getAll())}
        if(!currentPage){dispatch(nextPage())}
    }, [dispatch,recipes.length,currentPage]);

    const [axu, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderRecipes(event.target.value));
        setAux(!axu);
    }
    const handleOrderAlfa = (event) => {
        dispatch(orderAlfaRecipes(event.target.value));
        setAux(!axu);
    }
    const handleFromApi = (event) => {
        dispatch(IsFromApi(event.target.value));
        setAux(!axu);
    }
    const handleDiets = (event) => {
        dispatch(filterDiets(event.target.value));
        setAux(!axu);
    }


    return (
        <div className={style.container}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>
            <select onChange={handleOrderAlfa}>
                <option value="A">A...Z</option>
                <option value="Z">Z...A</option>
            </select>
            <select onChange={handleFromApi}>
                <option value="A">Apis Recipes</option>
                <option value="D">DB Recipes</option>
            </select>
            <select onChange={handleDiets}>
                <option value="gluten free">gluten free</option>
                <option value="dairy free">dairy free</option>
                <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                <option value="vegan">vegan</option>
                <option value="paleolithic">paleolithic</option>
                <option value="primal">primal</option>
                <option value="whole 30">whole 30</option>
                <option value="pescatarian">pescatarian</option>
                <option value="ketogenic">ketogenic</option>
                <option value="fodmap friendly">paleolithic</option>
            </select>
            <RecipesContainer />
            <Paginado/>

        </div>
    )
};
export default Home;