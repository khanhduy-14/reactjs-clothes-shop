import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const CartNotification = () => {
  return (
    <div className="w-200px h-100px bg-white shadow-lg">
      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
      <span>Add to cart successful</span>
    </div>
  );
};

export default CartNotification;
