import React from "react";

const ProductColor = ({ item }) => {
  return (
    <div
      className="order-color-check w-5 h-5 rounded-full shadow-xl"
      style={{ backgroundColor: item.toString() }}
      onClick={handleOrderColor}
      key={item}
    ></div>
  );
};
function handleOrderColor(e) {
  const parentNode = e.target.parentNode;
  const checkNode = parentNode.querySelector(".border-4");
  if (checkNode)
    checkNode.classList.remove("border-4", "border-solid", "border-blue-600");
  e.target.classList.add("border-4", "border-solid", "border-blue-600");
}

export default ProductColor;
