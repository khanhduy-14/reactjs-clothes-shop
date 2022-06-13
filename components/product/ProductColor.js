import React, { Fragment } from "react";
import { useDispatch } from "react-redux";

const ProductColor = ({ item }) => {
  const dispatch = useDispatch();
  function handleOrderColor(e) {
    const parentNode = e.target.parentNode;
    const checkNode = parentNode.querySelector(".border-4");
    if (checkNode)
      checkNode.classList.remove("border-4", "border-solid", "border-blue-600");
    e.target.classList.add("border-4", "border-solid", "border-blue-600");
    dispatch({ type: `product/choose_color`, payload: item });
  }

  return (
    <Fragment>
      <div
        className="color-pick order-color-check w-5 h-5 rounded-full shadow-xl"
        style={{ backgroundColor: item.toString() }}
        onClick={handleOrderColor}
        key={item}
      ></div>
    </Fragment>
  );
};

export default ProductColor;
