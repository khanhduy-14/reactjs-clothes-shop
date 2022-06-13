import React from "react";
import { useDispatch } from "react-redux";

const ProductSize = ({ item }) => {
  const dispatch=useDispatch();
  function handleOrderSize(e) {
    const parentNode = e.target.parentNode;
    const checkNode = parentNode.querySelector(".border-4");
    if (checkNode)
      checkNode.classList.remove("border-4", "border-solid", "border-blue-600");
    e.target.classList.add("border-4", "border-solid", "border-blue-600");
    dispatch({type:`product/choose_size`,payload: item})
  }
  return (
    <div
      className="size-pick order-color-check w-16 h-10 rounded-lg bg-white flex justify-center items-center "
      onClick={handleOrderSize}
      key={item}
    >
      <span className="pointer-events-none">{item}</span>
    </div>
  );
};

export default ProductSize;
