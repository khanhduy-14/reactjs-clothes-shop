import React, { useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss/navigation";
import "./swiper.scss";
import "swiper/scss";
import Spinner from "../Spinner";
import HomeProductCard from "./HomeProductCard";
import ProductView from "../product/ProductView";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchProducts } from "../../redux2/Products/productHelper";
import { setProducts } from "./../../redux2/Products/productAction";

SwiperCore.use([Navigation]);

const mapState = ({ productsData }) => ({
  products: productsData.products,
  viewProduct: productsData.viewProduct,
  loading: productsData.loading,
});
const HomeProduct = () => {
  const { products, viewProduct,loading } = useSelector(mapState);

  // useEffect(() => {
  //   dispatch(setProducts(products));
  // }, []);
  // const {
  //   data: product,
  //   loading,
  //   viewdetail,
  // } = useSelector((state) => state.productState);

  return (
    <div className="home-product relative bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[660px] flex flex-col justify-center items-center res600:h-[800px]">
      <h1 className="text-white text-[56px] font-bold font-mada mt-10 md:text-[30px] ">
        Our Best Seller Product
      </h1>
      {loading && <Spinner />}
      {viewProduct && <ProductView></ProductView>}
      <div className="product-swiper flex items-center justify-center w-[630px] h-full mx-0 tablet768:w-[540px] res600:w-[320px] res600:h-[80%]">
        <Swiper
          grabCursor={"true"}
          slidesPerView={2}
          navigation
          spaceBetween={30}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
          }}
        >
          {products.length > 0 &&
            products.map((item) => (
              <SwiperSlide key={item.id}>
                <HomeProductCard item={item}></HomeProductCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProduct;
