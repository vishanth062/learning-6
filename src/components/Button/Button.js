import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import { incrementData,getValue } from "../../store/Redux";
import { useState, useEffect } from "react";

const Button = ({ data, id }) => {
  const [value, setvalue] = useState(true);
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
          className="bg-[#1E293B] p-2 m-2 text-white rounded-lg hover:bg-gray-700"
          onClick={handleDispatch}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            style={{ color: "#ffffff" }}
          />
          add to cart
        </button>
      ) : (
        <button
          className="bg-green-700 p-2 m-2 text-white rounded-lg pointer-events-none hover:bg-green-300 "
          onClick={handleDispatch}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            style={{ color: "#ffffff" }}
          />
          go to cart
        </button>
      )}
    </>
  );
};

export default Button;
