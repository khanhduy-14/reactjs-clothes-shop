import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./swiper.scss";
import "swiper/scss";
import { fetchTrendsStart } from "../../redux2/Trend/trendAction";
// import { db } from "../../firebase/firebase-config";
import BannerImageItem from "./BannerImageItem";
import triangle from "../../assets/images/triangle.png";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const mapState = ({ trendData }) => ({
  trends: trendData.trends,
  loading: trendData.loading,
});

const Banner = () => {
  const dispatch = useDispatch();
  const { trends, loading } = useSelector(mapState);
  useEffect(() => {
    dispatch(fetchTrendsStart());
  }, []);

  return (
    <div className="home-main relative bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[660px] md:h-[780px] res600:h-[1000px] ">
      <div className="home-common flex items-center justify-between">
        <img
          src={triangle}
          alt=""
          className="absolute w-[200px] z-[1] left[90%] translate-x-[30px] translate-y-[150px]  opacity-50 origin-center animate-shapenew-30"
        />
        <img
          src={triangle}
          alt=""
          className="absolute w-[160px] z-[1] right-[5%] top-[20%] opacity-50 origin-center animate-shape-30"
        />
        <img
          src={triangle}
          alt=""
          className="absolute w-[80px] z-[1] left-[5%] top-[20%] opacity-50 origin-center animate-shape-30"
        />
        <img
          src={triangle}
          alt=""
          className="absolute w-[300px] z-[1] right-[40%] top-[40%] opacity-50 origin-center animate-shapenew-30"
        />
      </div>
      <div className="banner-content gap-10 flex justify-center items-center absolute z-[98] w-[95%] h-[95%] left-[50%] translate-x-[-50%] mt-20 md:flex-col md:gap-0">
        <div className="banner-description w-[45%] md:w-full md:mt-10 ">
          <h1 className="text-white text-[56px] font-bold font-mada md:text-[50px] res600:text-[30px] res600:mt-24">
            Get the Latest Models From Us
          </h1>
          <Link to="/products">
            <button
              className="banner-button relative text-white rounded-lg px-8 py-3 font-pop text-bold text-2xl inline-block
            before:banner-[''] before:absolute before:top-0 before:left-0 before:w-[60px] before:h-[60px]  before:bg-[#2196f3] before:rounded-[50px] before:z-[-1]
            before:hover:w-full before:hover:text-[#A055F4] before:hover:bg-[#2196f3] before:transition-all before:ease-linear  before:duration-500
            md:mx-auto"
            >
              Shop Now
            </button>
          </Link>
        </div>
        <div className="banner-swiper w-[480px]  h-[440px] flex items-center justify-center relative res600:w-[320px]">
          {loading && <Spinner />}
          <Swiper
            grabCursor={"true"}
            slidesPerView={"auto"}
            navigation
            pagination
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {trends.length > 0 &&
              trends.map((item) => (
                <SwiperSlide key={item.id}>
                  <BannerImageItem link={item.linkImage}></BannerImageItem>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
