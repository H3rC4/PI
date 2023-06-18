import { useDispatch, useSelector } from "react-redux"
import { nextPage, prevPage } from "../../redux/actions"
import style from '../Paginado/Paginado.module.css'
const Paginado = () => {

    const dispatch = useDispatch()

    const pagina = useSelector(state => state.paginado)

    const handlerNext = () => {
        if (pagina < 12) {
            dispatch(nextPage())
        }
    }
    const handlerPrev = () => {
        if (pagina > 1) {
            dispatch(prevPage())
        }
    }


    return (
        <div className={style.paginado}>
            <button onClick={handlerPrev}>prev</button>
            <p>Page: {pagina}</p>
            <button onClick={handlerNext}>next</button>
        </div>
    )
}

export default Paginado;