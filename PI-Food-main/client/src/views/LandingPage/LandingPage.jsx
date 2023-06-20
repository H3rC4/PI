import style from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAll,nextPage } from '../../redux/actions'


const LandingPage = () => {
    const dispatch = useDispatch()
        /*con useEffect le vamos a decir q cuando se monte el
    componente o haya un cambio en el array de dependencias
    ejecute la funcion
    
    */
    useEffect(() => { 
        dispatch(getAll()) 
        dispatch(nextPage())
    }, [dispatch]);
    return (
        <div className={style.container}>
            <div className={style.recuadro}>
            <p>¡Bienvenido a nuestra web de recetas! Descubre una experiencia culinaria extraordinaria.
                ¿Estás buscando inspiración para tus comidas diarias? ¿Quieres sorprender a 
                tus seres queridos con platos deliciosos y creativos? ¡Estás en el lugar correcto! 
                Nuestra web de recetas está diseñada para convertirte en un verdadero chef en la comodidad de 
                tu hogar.</p>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            </div>
        </div>
    )
};
export default LandingPage;