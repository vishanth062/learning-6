import { useDispatch} from "react-redux"
import {change} from "../../store/Redux"
import { memo } from "react"
import { useEffect,useState } from "react"

const Offer=()=>{
    
const[offer,setoffer]=useState(0)
    const Dispatch=useDispatch()
    function handle(){

    }
   

    useEffect(()=>{
        const offer=[10,20,50,80,90]
        const temp=offer[Math.floor(Math.random()*offer.length)]
        Dispatch(change(temp))
        setoffer(temp)
       

    },[Dispatch])
        
    
    
    return(
        <>
        
 <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-1xl text-white font-bold">{offer}%</span>
        </>
    )
}

export default (Offer)