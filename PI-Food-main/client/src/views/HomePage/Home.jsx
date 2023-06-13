import style from './Home.module.css';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import RecipesContainer from '../../component/RecipesContainer/RecipesContainer';
// importar las actions q queremos despacahar
import {getAll} from '../../redux/actions'

const Home=()=> {

const dispatch = useDispatch()
/*con useEffect le vamos a decir q cuando se monte el
componente o haya un cambio en el array de dependencias
ejecute la funcion

*/
useEffect(()=>{dispatch(getAll())},[dispatch]);

return (
    <div className={style.container}>
        <RecipesContainer/>
        
    </div>
    )
};
export default Home;