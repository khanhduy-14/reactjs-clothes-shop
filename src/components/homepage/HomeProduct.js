import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase-config";
import SwiperCore, { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss/navigation";

import "./swiper.scss";
import "swiper/scss";
import Spinner from "../Spinner";
import HomeProductCard from "./HomeProductCard";

SwiperCore.use([Navigation]);

const HomeProduct = () => {
  const { data: product, loading } = useSelector((state) => state.productState);
  const dispatch = useDispatch();

  const colRef = collection(db, "product");

  useEffect(() => {
    dispatch({ type: `product/fetch_request` });

    let dataProduct = [];
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        dataProduct.push({ id: doc.id, ...doc.data() });
      });
      dispatch({ type: "product/fetch_success", payload: dataProduct });
    });
  }, [dispatch]);

  return (
    <div className="home-product relative bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[660px] flex flex-col justify-center items-center res600:h-[800px]">
      <h1 className="text-white text-[56px] font-bold font-mada mt-10 md:text-[30px] ">
        Our Best Seller Product
      </h1>
      {loading && <Spinner />}
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
          {product.length > 0 &&
            product.map((item) => (
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
