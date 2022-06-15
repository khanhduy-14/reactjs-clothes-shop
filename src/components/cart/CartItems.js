import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { viewProduct } from "../../redux2/Products/productAction";
import {
  deleteCartOne,
  addCartOne,
  minusCartOne,
} from "../../redux2/Cart/cartAction";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  function handleDeleteCartItem() {
    dispatch(deleteCartOne(item));
  }
  function handleClickPlus() {
    dispatch(addCartOne(item));
  }
  function handleClickMinus(e) {
    if (item.quantity > 1) {
      dispatch(minusCartOne(item));
    }
  }
  function handleClickImage() {
    dispatch(viewProduct(item));
  }
  return (
    <div className="cart-item flex gap-3 justify-around items-center border-b-2 pb-2 mt-2 ">
      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faPlus}
          className="font-bold text-xl border-[1px] px-2 py-2"
          onClick={handleClickPlus}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faMinus}
          onClick={handleClickMinus}
          className="font-bold text-xl border-[1px] px-2 py-2"
        ></FontAwesomeIcon>
      </div>
      <img
        src={item.image}
        alt=""
        className="w-[70px] h-[70px] rounded-lg object-cover"
        onClick={handleClickImage}
      />
      <div className="item-content flex flex-col gap-3 text-mada w-[50%]">
        <h2 className="font-bold">{item.name}</h2>
        <div className="flex gap-2">
          <span className="opacity-80 text-sm">Quantity:</span>
          <span className="text-sm text-center">{item.quantity}</span>

          <span className="opacity-80 text-sm">Size:</span>
          <span className="text-sm text-center">{item.chooseSize}</span>

          <span className="opacity-80 text-sm">Color:</span>
          <div
            className="order-color-check w-5 h-5 rounded-full shadow-xl self-center"
            style={{ backgroundColor: item.chooseColor }}
          ></div>
        </div>
      </div>
      <span>{item.price * item.quantity}$</span>
      <FontAwesomeIcon
        icon={faClose}
        className="font-bold text-xl"
        onClick={handleDeleteCartItem}
      ></FontAwesomeIcon>
    </div>
  );
};

export default CartItems;
