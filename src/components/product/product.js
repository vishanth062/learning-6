import {useEffect,useState} from "react"
import InfiniteScroll from "react-infinite-scroll-component";


import Button from "../Button/Button";



const Product=({url})=>{
    
  const  [value,setvalue]=useState({
    data:[],
    load:true
  })
  const [page,setpage]=useState(1)
  const [hasMore,setHasMore]=useState(true)
  
 

const API=async ()=>{
  try{
  const api=await fetch(`https://fakestoreapi.in/api/products?limit=10&page=${page}`);
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

     
    API();

    return ()=>{

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
var index=0;
const offer=[20,30,50,80,90]

function genarateOffer(){
  index=Math.floor(Math.random()*offer.length)
  return offer[index]
}


    return(
        <>
        <InfiniteScroll dataLength={temp.length||0} next={FetchMoreData} hasMore={hasMore} loader={<p>loading...</p>} endMessage={
          <p>you have reach the end </p>
        }>
   {(
          <ul className="flex justify-between flex-wrap gap-2 pr-4 pl-4">
          {
          

          temp.map((data) => (
           <>
          
            <li key={data.id} className="w-[300px] m-1 shadow-2xl rounded-md p-4 overflow-hidden flex flex-col ">
              <div className="max-h-[200px]  overflow-hidden relative">
              <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-1xl text-white font-bold">{genarateOffer()}%</span>
                <img src={data.image} className="h-auto w-auto rounded-lg  " alt="Product" />
              </div>
              <p className="mt-2">{data.title.length>40?data.title.substring(0,40)+"....":data.title}</p>
              <div className="flex">
              {Array.from({length:Math.random()*4+2}).map(()=>{
                return <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
               </svg>
              })}
              </div>
              <span class="text-3xl font-bold text-slate-900">${Math.floor(data.price-data.price*(offer[index]/100))}</span>
        <span class="text-sm text-slate-900 line-through">${data.price}</span>
             
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