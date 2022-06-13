import React from "react";

const BannerImageItem = ({ link }) => {
  return (
    <div className="banner-items  flex justify-center items-center">
      <img
        src={link}
        alt=""
        className="image-items object-cover w-[320px] h-[400px] res600:w-[240px] res600:h-[300px] border-black border-4 rounded-r-[80px] rounded-tl-[80px]"
      />
    </div>
  );
};

export default BannerImageItem;
