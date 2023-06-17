import style from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RecipesContainer from '../../component/RecipesContainer/RecipesContainer';
import { useState } from 'react'
// importar las actions q queremos despacahar
import { getAll } from '../../redux/actions'
import { orderRecipes, orderAlfaRecipes,IsFromApi } from '../../redux/actions'

const Home = () => {

    const dispatch = useDispatch()
    /*con useEffect le vamos a decir q cuando se monte el
    componente o haya un cambio en el array de dependencias
    ejecute la funcion
    
    */
    useEffect(() => { dispatch(getAll()) }, [dispatch]);

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
            <RecipesContainer />

        </div>
    )
};
export default Home;