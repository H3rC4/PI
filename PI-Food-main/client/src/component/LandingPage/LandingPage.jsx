import style from './LandingPage.module.css';
import { Link } from 'react-router-dom';


const LandingPage=()=> {
    return (
        <div className={style.container}>
           <Link to='/home'>
            <button>Home</button>
            </Link>
        </div>
    )
    };
export default LandingPage;