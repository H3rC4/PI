import style from "./ButtomsNav.module.css";

import { buttomsPage } from '../../redux/actions';
import { useDispatch } from 'react-redux';



const ButtomsNav = ()=>{
    const dispatch = useDispatch();    
    
    const handlerClick=(index,page)=>{
        dispatch (buttomsPage(index,page))
    };
    return(

        <div className={style.buttomsNav}>
            <button onClick={()=>handlerClick(0,1)} >1</button>
            <button onClick={()=>handlerClick(9,2)} >2</button>
            <button onClick={()=>handlerClick(18,3)}>3</button>
            <button onClick={()=>handlerClick(27,4)}>4</button>
            <button onClick={()=>handlerClick(36,5)}>5</button>
            <button onClick={()=>handlerClick(45,6)}>6</button>
            <button onClick={()=>handlerClick(54,7)}>7</button>
            <button onClick={()=>handlerClick(63,8)}>8</button>
            <button onClick={()=>handlerClick(72,9)}>9</button>
            <button onClick={()=>handlerClick(81,10)}>10</button>
            <button onClick={()=>handlerClick(90,11)}>11</button>
            <button onClick={()=>handlerClick(99,12)}>12</button>
        </div>
    )

}
export default ButtomsNav;