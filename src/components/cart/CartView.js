import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { closeCartItems ,clearCart} from "../../redux2/Cart/cartAction";
import { Link } from "react-router-dom";

const mapState = ({ productsData, cartData }) => ({
  products: productsData.products,
  viewProduct: productsData.viewProduct,
  loading: productsData.loading,
  cartItems: cartData.cartItems,
});
const CartView = () => {
  const { cartItems } = useSelector(mapState);
  const cartPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const dispatch = useDispatch();
  function handleCloseCart() {
    dispatch(closeCartItems());
  }
  function handleClickOutModal(e) {
    if (e.target.matches(".modal")) dispatch(closeCartItems());
  }
  function handleClearCart(){
dispatch(clearCart());
  }
  return (
    <div
      className="modal fixed z-[10000] bg-[#ccc] bg-opacity-50 top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center"
      onClick={handleClickOutModal}
    >
      <div className="cart bg-slate-500 w-[500px] h-[500px] rounded-lg text-white res600:w-[310px] res600:text-sm">
        <div className="h-[100px] flex items-center justify-around ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded w-[120px]"
            onClick={handleCloseCart}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded w-[120px]"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 && (
          <div className="font-bold font-mada text-xl text-white w-full flex justify-center items-center">
            Card item is Empty
          </div>
        )}

        <div className="cart-list flex flex-col gap-3 h-[300px] overflow-auto">
          {cartItems &&
            cartItems.map((item) => (
              <CartItems
                key={item.id + item.chooseSize + item.chooseColor}
                item={item}
              ></CartItems>
            ))}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t-2 mt-3 border-[#000] flex items-center justify-around h-[100px] ">
            <span className="font-mada font-bold text-xl res600:font-thin res600:text-sm">
              Subtotal Amout: {cartPrice}$
            </span>
            <Link to="/checkout">

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded w-[120px]">
              Check Out
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
