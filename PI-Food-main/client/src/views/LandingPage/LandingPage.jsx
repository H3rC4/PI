import style from './LandingPage.module.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
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