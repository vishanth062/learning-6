import {useEffect,useState} from "react"


import Button from "../Button/Button";



const Product=({url})=>{
    
  const  [value,setvalue]=useState({
    data:[],
    load:true
  })

useEffect(()=>{

    const API=async ()=>{
        try{
        const api=await fetch(url);
        const data=await api.json();
        if(!api.ok){
            throw new Error("its not good api fail")
        }
        setvalue((prev) => ({
            ...prev,
            load: false
          }));
          setvalue((prev) => ({
            ...prev,
            data: data
          }));
          
        console.log(data)

        }
        catch(error){
            console.log("caught with a error",error)
        }
    }

    API();

    //clean-up function 
    return()=>{

    };
},[url])



let temp=[]
if(!value.load){
 temp=[...value.data]
console.log("hii there",temp)

}
// useCallback(()=>{
   //  temp.sort(()=>Math.random()-0.5)
// },[temp])




    return(
        <>
        {value.load ?(<p>loading...</p>):(
          <ul className="flex justify-between flex-wrap gap-2">
          {
          

          temp.map((data) => (
            <li key={data.id} className="w-[300px] m-1 shadow-2xl rounded-md p-4 overflow-hidden flex flex-col">
              <div className="max-h-[200px] overflow-hidden">
                <img src={data.image} className="h-auto w-auto" alt="Product" />
              </div>
              <p className="mt-2">{data.title}</p>

                <Button data={data} id={data.id}></Button>
            </li>
          ))}
        </ul>
            
    
    )}
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