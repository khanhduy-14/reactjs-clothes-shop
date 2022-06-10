import React, { Fragment } from "react";
import Banner from "../components/homepage/Banner";
import HomeAdver from "../components/homepage/HomeAdver";
import HomeProduct from "../components/homepage/HomeProduct";
import Service from "../components/homepage/Service";
const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <Service></Service>
      <HomeProduct></HomeProduct>
      <HomeAdver></HomeAdver>
    </Fragment>
  );
};

export default HomePage;
