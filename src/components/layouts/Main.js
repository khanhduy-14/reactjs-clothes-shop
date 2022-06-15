import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AdminToolbar from "./AdminToolbar";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Main = () => {
  const { currentUser } = useSelector(mapState);
  let role=[];
  if(currentUser&&Array.isArray(currentUser.userRoles)){
    const {userRoles} = currentUser;
    role=userRoles
  }
  return (
    <Fragment>
    { role.includes('admin') &&   <AdminToolbar></AdminToolbar>}
      <Header ></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
