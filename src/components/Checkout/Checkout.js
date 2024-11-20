
import { useSelector,useDispatch } from "react-redux"
import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { incrementData,increment,decrementData,toggale,remove } from "../../store/Redux"
const Checkout=()=>{

  const nav=useNavigate()
    
    const DATA=useSelector((state)=>state.cart)

    const Dispatch=useDispatch()
    

    function handleIncrement(data){
Dispatch(incrementData(data))
Dispatch(increment())
    }

function handleDcrement(data){
Dispatch(decrementData(data))
}

function handleToggle(){
    Dispatch(toggale())
}
   
function handleRemove(data){
Dispatch(remove(data))
    
}

function handleToast(){
  if(DATA.data.length!==0)
  toast.success('your order is placed!🎉🎉',{
    position:"bottom-left"
  });
  else{
    toast.error('Add Some Item To Cart!🎉🎉',{
      position:"bottom-left"
    });

  }
  nav('/')

  localStorage.removeItem('data')
  Dispatch(remove(-1))

}
    
    let ids=[]
   const array=DATA.data.map(items=>items.id)
   .filter((value, index, self) => self.indexOf(value) === index) // Filter unique IDs
  .map(id => DATA.data.find(item => item.id === id));
  console.log(array,"array is here ")

    let subtotal=0;
    
   

    return(
        <>
        <div className="flex justify-between ">
          <Link to='/'>
        <button className="bg-slate-200 font-bold rounded-xl p-3 m-0" onClick={ handleToggle}> &lt; BACK</button>
        </Link>
        <h1 className="text-4xl font-bold text-gray-900"> Shopping Cart</h1>
        <h1 className="w-20"></h1>
        </div>
        <section class="h-screen bg-gray-100  ">
  <div class="mx-auto px-4 sm:px-6 lg:px-8 ">
    

    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
      <div class="bg-white shadow">
        <div class="px-4 py-6 sm:px-8 sm:py-10 shadow-2xl ">
          <div class="flow-root">
            <ul class="-my-8 h-64 overflow-auto px-5">
               <div >
                { 
               DATA.data.map((data)=>{
                
                

                    if(!ids.some(items=>items===data.id)){
                        ids.push(data.id)
                        const total=DATA.data.reduce((acc,hell)=>{
                            if(data.id===hell.id){
                                return acc+1
                            }
                            else{
                                return acc
                            }
                           },0)
                           subtotal+=(data.price*total)
                  return   <li class={`flex  flex-col space-y-3  py-6 text-left  sm:flex-row sm:space-x-5 sm:space-y-0 ${ids.length<array.length?'border-b-2':``}`}>
                    <div className="flex">
                     <div class="shrink-0 max-h-[50px] max-w-[50px] overflow-hidden rounded-lg">
                      <img src={data.image}/>
                     </div>
     
                     <div class=" flex flex-1 flex-col justify-between">
                       <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                         <div class="pr-8 sm:pr-5">
                           <p class="text-base font-semibold text-gray-900">{data.description.length>80?data.description.substring(0,80)+"...":data.description}</p>
                          
                         </div>
                        
     
                         <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">

                           
                        
                        
                           <div class="shrink-0 w-20  flex justify-between text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                           ${parseFloat(data.price*total).toFixed(2)}
                           <button type="button" className="pl-2 flex text-1xl items-start align-top flex-nowrap font-semibold text-gray-500 rounded hover:text-red-900 " onClick={()=>handleRemove(data)}>
                           x
                           {/* class=" text-2xl top-0 rounded pl-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-red-900"
                         */}
                         </button> 
                          
                           </div>
                           
                          
                           <div class="sm:order-1">
                             <div class="mx-auto flex h-8 items-stretch text-gray-600">
                               <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={()=>handleDcrement(data)}>-</button>
                               <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{total}</div>
                               <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={()=>handleIncrement(data)} >+</button>
                             </div>
                             
                           </div>
                         </div>
                       </div>
     
                       
                      
                     </div>
                     </div>
                   </li>
                   }

                })}
             </div>


            </ul>
          </div>

          <div class="mt-6 border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Shipping</p>
              <p class="text-lg font-semibold text-gray-900">$8.00</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span>${parseFloat(subtotal+8).toFixed(2)}</p>
          </div>

          <div class="mt-6 text-center">
            <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800" onClick={handleToast}>
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>

    )
}
export default Checkout