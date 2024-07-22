
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector,useDispatch } from 'react-redux';
import { toggale } from '../../store/Redux';

export default function Cart(){
    const DATA=useSelector((state)=>state.cart)
    const Dispatch=useDispatch()
    function changeState(){
        Dispatch(toggale())

    }
    return(
        <>
        <button onClick={changeState}>
        <div className='relative'>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="2xl" style={{color: "#babec5",}} />
      { (DATA.data.length!==0)&& <span className='bg-purple-700 rounded-full w-6 h-6 absolute top-0 right-0 flex items-center justify-center text-white font-bold'>{DATA.data.length}</span>}
        </div>
        </button>
        </>

        
    )

}