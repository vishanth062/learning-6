import {useEffect,useState} from "react"
import InfiniteScroll from "react-infinite-scroll-component";

import Offer from "./Offer";

import Button from "../Button/Button";

import Price from "./Price";
import Shimmer from "../Shimmer/Shimmer";

const Product=({url})=>{

  
    
  const  [value,setvalue]=useState({
    data:[],
    load:true
  })
  const [page,setpage]=useState(1)
  const [hasMore,setHasMore]=useState(true)
  
  
 

const API=async ()=>{
  try{
  const api=await fetch(`https://fakestoreapi.in/api/products?limit=8&page=${page}`);
  const DATAa=await api.json();
  const data= DATAa.products
  console.log(DATAa,"API",page,data.length)
if(data.length===0||page>2){
  setHasMore(false)
}
 



  if(!api.ok){
      throw new Error("its not good api fail")
  }
  setvalue((prev) => ({
      ...prev,
      load: false
    }));
    setvalue((prev) => ({
      ...prev,
      data: [...prev.data,...data]
    }));
    
  console.log(data)

  }
  catch(error){
      console.log("caught with a error",error)
  }
}


useEffect(()=>{

  const Abort=new AbortController()

     
    API();

    return ()=>{
      Abort.abort()

    }//clean-up function 
   
},[url,page])


const FetchMoreData=()=>{

setpage((prev)=>prev+1)
}


let temp=[]
if(!value.load){
 temp=[...value.data]
console.log("hii there temp",temp)

}
// useCallback(()=>{
   //  temp.sort(()=>Math.random()-0.5)
// },[temp])



function handlecondetion(data){
  if(!localStorage.getItem(data.id)){
   

    localStorage.setItem(data.id,JSON.stringify([((Math.floor(Math.random()*80)+10)),(Math.floor(Math.random()*4+1))]))
   }
}

const handleStar = (data) => {
  const storedData =localStorage.getItem(data.id)
   const temp=JSON.parse(storedData)
  console.log((temp[0]),data.id)
  const array=Array.from({length:temp[1]})

  return(
    
    <div>
    <div className="flex">
    {
      array.map(()=>{
       return <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      
      
      },[])
      
    }
    </div>
    
    <span className="text-3xl font-bold text-slate-900">${Math.floor(data.price-data.price*(temp[0]/100))}</span>
    <span className="text-sm text-slate-900 line-through">${data.price}</span>
   
    
    </div >
   
    
    
  )
  
}

useEffect(()=>{
  value.data.map((DD)=>{
    handleStar(DD)
  })

},[])







    return(
        <>
        <InfiniteScroll dataLength={temp.length||0} next={FetchMoreData} hasMore={hasMore} loader={<Shimmer/>} endMessage={
          <p>you have reach the end </p>
        }>
   {(
          <ul className="flex justify-between flex-wrap gap-4 pr-4 pl-4">
          {
          

          temp.map((data) => (
            
           <>
          
            <li key={data.id} className="w-[300px] m-1 shadow-2xl rounded-md p-4 overflow-hidden flex flex-col ">
              <div className="max-h-[200px]  overflow-hidden relative">
             {/* {Offer should be added here } */}
             
             {handlecondetion(data)
            
             }
             
            {/* <Offer></Offer> */}
            <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-1xl text-white font-bold">{JSON.parse(localStorage.getItem(data.id))[0]}%</span>
             
                <img src={data.image} className="h-auto w-auto rounded-lg  " alt="Product" />
              </div>
              <p className="mt-2" title={data.title} >{data.title.length>40?data.title.substring(0,40)+"....":data.title}</p>

              {/*Pricing should be added here  */}
              
             
              {handleStar(data)}
              
             
       
        
             

              {/* <Price data={data}></Price> */}
             
             
                <Button data={data} id={data.id}></Button>
            </li>

            </>
            
          ))}
        </ul>
            
    
    )}
</InfiniteScroll >
       
        </>
      
    )

}

export default Product



// {value.load ? (
//     <p>Loading....</p>
//   ) : (
//     <div className="flex gap-4 justify-between flex-wrap w-40">
//       <ul>
//       {value.data.map((product) => (
//         <li key={product.id} className="m-3">
//           <h3>{product.title}</h3>
//           <p>Price: ${product.price}</p>
//           {/* Add more details or components for each product */}
//         </li>
//       ))}
//       </ul>
//     </div>
//   )}