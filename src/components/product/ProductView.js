import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const ProductView = () => {
  const dispatch = useDispatch();
  function handleCloseModal(e) {
    dispatch({ type: `product/viewdetail_delete` });
  }
  function handleClickOutModal(e) {
    if (e.target.matches(".modal"))
      dispatch({ type: `product/viewdetail_delete` });
  }
  return (
    <div
      className="modal fixed z-[10000] bg-[#ccc] bg-opacity-50 top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center"
      onClick={handleClickOutModal}
    >
      <div className="modal-content bg-slate-300 w-[850px] h-[400px] flex gap-3 justify-around items-center py-10 rounded-xl   right-[0] relative">
        <FontAwesomeIcon
          icon={faClose}
          className="absolute right-0 top-0 text-3xl text-white mt-5 mr-5"
          onClick={handleCloseModal}
        ></FontAwesomeIcon>
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
          alt=""
          className="w-[30%] h-[80%] rounded-xl"
        />
        <div className="product-content flex flex-col gap-3 w-[360px]">
          <span className="font-bold text-black text-[28px]">
            Basic Tee 6-Pack
          </span>
          <span className=" text-black text-[24px] font-pop">192$</span>

          <form action="" className="h-full  flex flex-col gap-3">
            <span className="text-sm text-gray-900 font-medium">Color</span>
            <div className="order-color flex gap-3">
              <div
                className="order-color-check w-5 h-5  rounded-full bg-white border-"
                onClick={handleOrderColor}
              ></div>
              <div
                className="order-color-check w-5 h-5 rounded-full bg-black"
                onClick={handleOrderColor}
              ></div>
              <div
                className="order-color-check w-5 h-5 rounded-full   bg-yellow-400"
                onClick={handleOrderColor}
              ></div>
              <div
                className="order-color-check w-5 h-5 rounded-full bg-blue-900"
                onClick={handleOrderColor}
              ></div>
            </div>
            <span className="text-sm text-gray-900 font-medium">Size</span>
            <div className="order-size flex gap-3">
              <div
                className="order-color-check w-16 h-10 rounded-lg bg-white flex justify-center items-center"
                onClick={handleOrderSize}
              >
                <span className="pointer-events-none">L</span>
              </div>
              <div
                className="order-color-check w-16 h-10 rounded-lg bg-white flex justify-center items-center"
                onClick={handleOrderSize}
              >
                <span className="pointer-events-none">XL</span>
              </div>
              <div
                className="order-color-check w-16 h-10 rounded-lg bg-white flex justify-center items-center"
                onClick={handleOrderSize}
              >
                <span className="pointer-events-none">XXL</span>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[120px]">
              Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
function handleOrderColor(e) {
  const parentNode = e.target.parentNode;
  const checkNode = parentNode.querySelector(".border-4");
  if (checkNode)
    checkNode.classList.remove("border-4", "border-solid", "border-[#A055F4]");
  e.target.classList.add("border-4", "border-solid", "border-[#A055F4]");
}

function handleOrderSize(e) {
  const parentNode = e.target.parentNode;
  const checkNode = parentNode.querySelector(".border-4");
  if (checkNode)
    checkNode.classList.remove("border-4", "border-solid", "border-[#A055F4]");
  e.target.classList.add("border-4", "border-solid", "border-[#A055F4]");
}

export default ProductView;
