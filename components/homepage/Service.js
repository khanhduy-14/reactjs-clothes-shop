import React from "react";

const Service = () => {
  return (
    <div className="home-service flex flex-col items-center justify-center bg-white h-[540px] res600:h-[720px] ">
      <h3 className="opacity-50 uppercase text-pop text-black">Best Service</h3>
      <h1 className="text-mada text-black text-[50px] font-bold text-center res600:text-[30px]">
        Here to come make your life more easier
      </h1>
      <div className="service-item mt-10 flex items-center justify-around w-full res600:flex-col res600:mt-0 ">
        <div className="service-itemcontent h-[200px] w-[200px] flex flex-col justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4285/4285622.png"
            alt=""
            className="h-[80px] w-[80px] object-cover res600:w-[50px] res600:h-[50px]"
          />
          <h2 className="mt-5 font-mada font-bold text-xl">Quick Response</h2>
          <p className="mt-5 font-pop opacity-70 text-center res600:text-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            officiis? Delectus a dolores magnam.
          </p>
        </div>
        <div className="service-itemcontent h-[200px] w-[200px] flex flex-col justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4090/4090434.png"
            alt=""
            className="h-[80px] w-[80px] object-cover res600:w-[50px] res600:h-[50px]"
          />
          <h2 className="mt-5 font-mada font-bold text-xl">Best Value</h2>
          <p className="mt-5 font-pop opacity-70 text-center res600:text-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            officiis? Delectus a dolores magnam.
          </p>
        </div>
        <div className="service-itemcontent h-[200px] w-[200px] flex flex-col justify-center items-center">
          <img
            src="https://cdn-icons.flaticon.com/png/512/3585/premium/3585031.png?token=exp=1654746028~hmac=f73fab165cc4f12827ba1c4d9388bd95"
            alt=""
            className="h-[80px] w-[80px] object-cover res600:w-[50px] res600:h-[50px]"
          />
          <h2 className="mt-5 font-mada font-bold text-xl">Cash Back</h2>
          <p className="mt-5 font-pop opacity-70 text-center res600:text-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            officiis? Delectus a dolores magnam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
