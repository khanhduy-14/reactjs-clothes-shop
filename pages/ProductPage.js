import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeProductCard from "../components/homepage/HomeProductCard";
import Spinner from "../components/Spinner";
import ProductView from "../components/product/ProductView";
import CartItems from "../components/cart/CartItems";

const ProductPage = () => {
  const dispatch = useDispatch();
  const {
    data: product,
    loading,
    viewdetail,
  } = useSelector((state) => state.productState);
  const dataCart = useSelector((state) => state.cartState);
  const cartPrice = dataCart.cartItems.reduce(
    (a, c) => a + c.price * c.quantity,
    0
  );
  function handleClearCart() {
    dispatch({ type: `cart/clear` });
  }
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center items-center ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          SHOP
        </span>
      </div>
      {loading && <Spinner />}
      {viewdetail && <ProductView></ProductView>}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-10 h-[900px] mt-10 ml-5">
          {product &&
            product.map((item) => (
              <HomeProductCard key={item.id} item={item}></HomeProductCard>
            ))}
        </div>
      </div>
      <div className="cart bg-slate-500 left-0 top-0 w-[500px] h-[700px]">
        <div className="h-[100px] flex items-center justify-around">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded w-[120px]">
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded w-[120px]"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {dataCart.cartItems.length === 0 && (
          <div className="font-bold font-mada text-xl text-white w-full flex justify-center items-center">
            Card item is Empty
          </div>
        )}

        <div className="cart-list flex flex-col gap-3 h-[500px]">
          {dataCart.cartItems &&
            dataCart.cartItems.map((item) => (
              <CartItems
                key={item.id + item.chooseSize + item.chooseColor}
                item={item}
              ></CartItems>
            ))}
        </div>

        {dataCart.cartItems.length > 0 && (
          <div className="border-t-2 mt-3 border-[#000] flex items-center justify-around h-[100px]">
            <span className="font-mada font-bold text-xl">
              Subtotal Amout: {cartPrice}$
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded w-[120px]">
              Check Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
