import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";

const ProductView = () => {
  const dataProduct = useSelector((state) => state.productState);
  const dataCart = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  function handleCloseModal(e) {
    dispatch({ type: `product/viewdetail_delete` });
  }
  function handleClickOutModal(e) {
    if (e.target.matches(".modal"))
      dispatch({ type: `product/viewdetail_delete` });
  }
  function handleAddToCart(e) {
    const checkSpan = e.target.parentNode.querySelector("span");
    checkSpan && e.target.parentNode.removeChild(checkSpan);
    const span = document.createElement("span");
    span.className = "text-red-700 font-bold text-mada text-xs ml-5";
    if (!dataProduct.chooseColor) {
      span.textContent = "*Please pick color";
    }
    if (!dataProduct.chooseSize) {
      span.textContent = "*Please pick color";
    }
    if (!dataProduct.chooseSize && !dataProduct.chooseColor) {
      span.textContent = "*Please pick color and size";
    }
    e.target.parentNode.appendChild(span);
    if (dataProduct.chooseSize && dataProduct.chooseColor) {
      const exist = dataCart.cartItems.find(
        (x) =>
          x.id === dataProduct.item.id &&
          x.chooseColor === dataProduct.chooseColor &&
          x.chooseSize === dataProduct.chooseSize
      );
      if (exist) {
        dataCart.cartItems.map((x) =>
          x.id === dataProduct.item.id &&
          x.chooseColor === dataProduct.chooseColor &&
          x.chooseSize === dataProduct.chooseSize
            ? dispatch({
                type: `card/add_one`,
                payload: x,
              })
            : null
        );
      } else {
        const cloneObject = JSON.parse(JSON.stringify(dataProduct.item));
        cloneObject.chooseColor = dataProduct.chooseColor;
        cloneObject.chooseSize = dataProduct.chooseSize;
        dispatch({
          type: `card/add_success`,
          payload: {
            ...cloneObject,
            quantity: 1,
          },
        });
      }
      dispatch({ type: `product/addtocard` });
      const nodeColor = e.target.parentNode.parentNode.querySelector(
        ".color-pick.border-4"
      );
      const nodeSize = e.target.parentNode.parentNode.querySelector(
        ".size-pick.border-4"
      );
      nodeSize &&
        nodeSize.classList.remove(
          "border-4",
          "border-solid",
          "border-blue-600"
        );
      nodeColor &&
        nodeColor.classList.remove(
          "border-4",
          "border-solid",
          "border-blue-600"
        );
    }
  }
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
          src={dataProduct.item.image}
          alt=""
          className="w-[30%] h-[80%] rounded-xl"
        />
        <div className="product-content flex flex-col gap-3 w-[360px]">
          <span className="font-bold text-white text-[28px]">
            {dataProduct.item.name}
          </span>
          <span className=" text-white text-[24px] font-pop">
            {dataProduct.item.price}$
          </span>

          <form action="" className="h-full  flex flex-col gap-3">
            <span className="text-sm text-white font-medium">Color</span>

            <div className="order-color flex gap-3">
              {dataProduct.item.color.map((item) => (
                <ProductColor key={item} item={item}></ProductColor>
              ))}
            </div>
            <span className="text-sm text-white font-medium">Size</span>
            <div className="order-size flex gap-3">
              {dataProduct.item.size.map((item) => (
                <ProductSize key={item} item={item}></ProductSize>
              ))}
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[120px]"
                onClick={handleAddToCart}
                type="button"
              >
                Add to cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
