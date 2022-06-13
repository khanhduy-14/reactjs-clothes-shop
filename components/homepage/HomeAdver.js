import React from "react";
import { Link } from "react-router-dom";

const HomeAdver = () => {
  return (
    <div className="home-adver bg-white h-[350px] flex items-center justify-around res600:h-[720px] res600:flex-col">
      <div className="adver-content w-[40%] md:w-[40%] res600:w-full res600:px-4">
        <div className="res600:flex res600:justify-center">
          <h2 className="font-bold font-mada text-[38px] md:text-[30px] res600:self-center">
            Look For Models Now
          </h2>
        </div>
        <p className="text-justify my-3 md:my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          blanditiis recusandae in, optio temporibus quo praesentium ad. Amet,
          eveniet, commodi nesciunt esse voluptate ratione incidunt, eum modi
          repellat laudantium fugiat.
        </p>
        <div className="res600:flex res600:justify-center">
        <Link to="products">

          <button className="res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-8 py-3 rounded-xl hover:opacity-80">
            Shop Now
          </button>
        </Link>
        </div>
      </div>
      <img
        src="https://cdn.shopify.com/s/files/1/0123/5065/2473/products/CM15_BM13091.327ADN_LoomedLinenFatigueShirtJacket_1462.jpg?v=1648748048"
        alt=""
        className="w-[300px] object-cover h-[300px] rounded-xl]"
      />
    </div>
  );
};

export default HomeAdver;
