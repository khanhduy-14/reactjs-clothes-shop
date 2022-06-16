import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[600px]  relative tablet768:h-[800px]">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full text-left"></div>
        <span className="text-pop text-[40px] text- font-bold text-white w-[70%] text-left absolute left-[10%]">
          ABOUT US
        </span>
        <div className="w-full h-[200px] border-b-[100px] border-b-white border-l-[100px] border-l-transparent"></div>
        <img
          src="https://www.celeb.vn/wp-content/uploads/2021/10/local-brand-nuoc-ngoai-buck-mason.jpg"
          alt=""
          className="w-[400px] h-[250px] absolute bottom-[30%] right-[10%] tablet768:w-[200px] tablet768:h-[200px] tablet768:bottom-[30px]"
        />
      </div>
      <div className="flex gap-3 justify-around  p-5 tablet768:w-full tablet768:flex-col tablet768:justify-center tablet768:items-center tablet768:p-0">
        <div className="flex flex-col gap-3 p-5 w-[40%]  tablet768:w-full">
          <h1 className="text-2xl font-mada font-bold">Profile</h1>
          <p className="text-xl text-justify text opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
            ullamcorper.
          </p>
          <p className="text-xl text-justify text opacity-70">
            Klara is an AI powered automated Solution Builder of Growth
            Strategy, Branding and Digital marketing planning for your business.
          </p>
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/0123/5065/2473/files/buck-mason-nashville_1_Colored_1900x725.jpg?v=1653576355"
          alt=""
          className="w-[400px] h-[300px] object-cover"
        />
      </div>
      <div className="flex gap-3 justify-around items-cente p-5 tablet768:w-full tablet768:flex-col tablet768:border-blue-500 tablet768:border-t-4 tablet768:justify-center tablet768:items-center tablet768:p-0">
        <img
          src="https://cdn.shopify.com/s/files/1/0123/5065/2473/files/buck-mason-nashville_2x3_3_Colored_800x.jpg?v=1653576379"
          alt=""
          className="w-[400px] h-[300px] object-cover"
        />
        <div className="flex flex-col gap-3 p-5 w-[40%]  tablet768:w-full ">
          <h1 className="text-2xl font-mada font-bold">Our Mission</h1>
          <p className="text-xl text-justify text opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
            ullamcorper.
          </p>
          <p className="text-xl text-justify text opacity-70">
            Klara is an AI powered automated Solution Builder of Growth
            Strategy, Branding and Digital marketing planning for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
