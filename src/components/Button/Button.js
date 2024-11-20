import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";


import { incrementData,getValue,toggale} from "../../store/Redux";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Button = ({ data, id }) => {
  const [value, setvalue] = useState(true);

 function handleToggle(){
   
 }
 function handleIncrement(data){
  Dispatch(incrementData(data))

}

  const Dispatch = useDispatch();
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("data"));
    if (storage && storage.some((data) => data.id === id)) {
      setvalue(false);
    }
  }, [id]);

  const handleDispatch = () => {
    Dispatch(incrementData(data));
 Dispatch(getValue())  
    setvalue(false);
  };
  return (
    <>
      {value ? (
        <button
          className="bg-[#1E293B] p-2 my-3 text-white rounded-lg  hover:bg-gray-700"
          onClick={handleDispatch}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            style={{ color: "#ffffff" }}
              className="pr-3"
          />
          Add To Cart
        </button>
      ) : (
       
        <div className="flex justify-between items-center my-3">
          
        <button
          className="bg-green-700 p-2  text-white rounded-lg  hover:bg-green-300 "
          onClick={()=>handleIncrement(data)}
           >
         
          Add More
        </button>


        <Link to='/Checkout'>
        <button className="bg-green-700 w-8 h-8 p-1  rounded-full hover:bg-green-300 " onClick={()=>handleToggle()} >
       
        <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            style={{ color: "#ffffff" }}
            
            className="mx-0.5 "
          />
          

        </button>
        </Link>
        </div>
        
      )}
    </>
  );
};

export default Button;
