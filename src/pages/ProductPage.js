import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeProductCard from "../components/homepage/HomeProductCard";
import Spinner from "../components/Spinner";
import ProductView from "../components/product/ProductView";
const mapState = ({ productsData, cartData }) => ({
  products: productsData.products,
  viewProduct: productsData.viewProduct,
  loading: productsData.loading,
  cartItems: cartData.cartItems,
});
const ProductPage = () => {
  const { products, viewProduct, loading, cartItems } = useSelector(mapState);
  const cartPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center items-center ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          SHOP
        </span>
      </div>
      {loading && <Spinner></Spinner>}
      {viewProduct && <ProductView></ProductView>}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-10 h-[900px] mt-10 ml-5">
          {products &&
            products.map((item) => (
              <HomeProductCard key={item.id} item={item}></HomeProductCard>
            ))}
        </div>
      </div>

    
    </div>
  );
};

export default ProductPage;
