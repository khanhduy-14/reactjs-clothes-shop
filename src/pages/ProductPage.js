import React from "react";
import { useSelector } from "react-redux";
import HomeProductCard from "../components/homepage/HomeProductCard";
import Spinner from "../components/Spinner";
import ProductView from "../components/product/ProductView";

const ProductPage = () => {
  const { data: product, loading,viewdetail } = useSelector((state) => state.productState);

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
      <div>
        <div className="grid grid-cols-3 gap-10 h-[900px] mt-10 ml-5">
          {product &&
            product.map((item) => (
              <HomeProductCard key={item.id} item={item}></HomeProductCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
