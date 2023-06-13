import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getById } from '../../redux/actions'
import { useSelector } from 'react-redux';

const DetailPage = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getById(id))
    })
    const recipeId = useSelector(state=>state.id); 
    console.log(recipeId)
    return (
        <div >
            <Link to='/home'><button>Home</button></Link>
        </div>
    )
}
export default DetailPage;