import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Main = () => {
  const { currentUser } = useSelector(mapState);
  let role = [];
  if (currentUser && Array.isArray(currentUser.userRoles)) {
    const { userRoles } = currentUser;
    role = userRoles;
  }
  return (
    <Fragment>
      {role.includes("admin") && (
        <div className="h-[100px] w-full flex flex-col gap-3 items-center justify-center mt-5">
          <span className="font-bold font-pop ">
            Hello, {currentUser.email}
          </span>
          <Link to="/admin">
            <button className="res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-8 py-3 rounded-xl hover:opacity-80">
              My Admin
            </button>
          </Link>
        </div>
      )}
      {role.includes("user") && (
        <div className="h-[40px] w-full flex flex-col gap-3 items-center justify-center">
          <span className="font-bold font-pop ">
            Hello, {currentUser.email}
          </span>
        </div>
      )}
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
