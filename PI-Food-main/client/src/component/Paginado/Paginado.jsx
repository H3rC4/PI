import { useState } from "react"
import { useDispatch } from "react-redux"
import { nextPage,prevPage } from "../../redux/actions"
import style from '../Paginado/Paginado.module.css'
const Paginado = ()=> {

    const dispatch = useDispatch()

    const [pagina, setPagina] = useState(1)

    const handlerNext = () => {
        setPagina(pagina + 1)
        dispatch(nextPage())
    }
    const handlerPrev = () => {
            setPagina(pagina - 1)
            dispatch(prevPage()) 
       
    }
    
    return(
       <div className={style.paginado}>
       <button onClick={handlerPrev}>prev</button>
        <p>Page: {pagina}</p>
       <button onClick={handlerNext}>next</button>
       </div> 
    )
}

export default Paginado;