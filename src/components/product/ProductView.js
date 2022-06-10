import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";

const ProductView = () => {
  const data = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  function handleCloseModal(e) {
    dispatch({ type: `product/viewdetail_delete` });
  }
  function handleClickOutModal(e) {
    if (e.target.matches(".modal"))
      dispatch({ type: `product/viewdetail_delete` });
  }
  console.log(data.item.color);
  return (
    <div
      className="modal fixed z-[10000] bg-[#ccc] bg-opacity-50 top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center"
      onClick={handleClickOutModal}
    >
      <div className="modal-content bg-slate-500 shadow-xl w-[850px] h-[400px] flex gap-3 justify-around items-center py-10 rounded-xl   right-[0] relative">
        <FontAwesomeIcon
          icon={faClose}
          className="absolute right-0 top-0 text-3xl text-white mt-5 mr-5"
          onClick={handleCloseModal}
        ></FontAwesomeIcon>
        <img
          src={data.item.image}
          alt=""
          className="w-[30%] h-[80%] rounded-xl"
        />
        <div className="product-content flex flex-col gap-3 w-[360px]">
          <span className="font-bold text-white text-[28px]">
            {data.item.name}
          </span>
          <span className=" text-white text-[24px] font-pop">
            {data.item.price}$
          </span>

          <form action="" className="h-full  flex flex-col gap-3">
            <span className="text-sm text-white font-medium">Color</span>
            <div className="order-color flex gap-3">
              {data.item.color.map((item) => (
                <ProductColor item={item}></ProductColor>
              ))}
            </div>
            <span className="text-sm text-white font-medium">Size</span>
            <div className="order-size flex gap-3">
              {data.item.size.map((item) => (
                <ProductSize item={item}></ProductSize>
              ))}
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

export default ProductView;
