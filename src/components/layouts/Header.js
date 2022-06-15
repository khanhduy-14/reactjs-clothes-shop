import React, { useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo_header.png";
import { Link, NavLink } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { auth } from "./../../firebase/firebase-config";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux2/User/userActions";
import {
  fetchProductsStart,
  setProducts,
} from "../../redux2/Products/productAction";
import { viewCartItems } from "../../redux2/Cart/cartAction";
import CartView from "../cart/CartView";
// import { db } from "../../firebase/firebase-config";

const mapState = ({ user, cartData }) => ({
  currentUser: user.currentUser,
  viewCart: cartData.viewCart,
  countItems: cartData.countItems,
});

const Header = () => {
  // const colRef = collection(db, "product");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: `product/fetch_request` });

  //   let dataProduct = [];
  //   onSnapshot(colRef, (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       dataProduct.push({ id: doc.id, ...doc.data() });
  //     });
  //     dispatch({ type: "product/fetch_success", payload: dataProduct });
  //   });
  // }, [dispatch]);
  const { currentUser, viewCart, countItems } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const signOut = () => {
    dispatch(signOutUserStart());
    window.location.href = "/";
  };
  function handleClickCart() {
    dispatch(viewCartItems());
  }
  return (
    <Fragment>
      {viewCart && <CartView></CartView>}
      <header
        className="header absolute h-[80px] rounded-lg bg-white w-[95%] mt-5 left-[50%] translate-x-[-50%] z-[100]  flex justify-between items-center
    res600:flex-col res600:h-[280px]"
      >
        <NavLink
          to="/"
          className="h-[100%] tablet768:w-[80px] res600:h-[120px] res600:w-[240px] rounded-l-lg"
        >
          <img
            src={logo}
            alt=""
            className="header-img h-[100%] tablet768:w-[80px] res600:h-[120px] res600:w-[320px] rounded-l-lg"
          />
        </NavLink>
        <div
          className="header-tab w-[50%] flex items-center justify-around font-mada not-italic text-lg text-[#0D1222] font-bold uppercase cursor-pointer
       tablet768:text-[14px] res600:w-[280px] res600:text-sm res600:justify-between"
        >
          <NavLink
            to="/"
            onMouseOver={handleTabEnter}
            onMouseLeave={handleTabLeave}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onMouseOver={handleTabEnter}
            onMouseLeave={handleTabLeave}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Product
          </NavLink>
          <span onMouseOver={handleTabEnter} onMouseLeave={handleTabLeave}>
            About
          </span>
          <span onMouseOver={handleTabEnter} onMouseLeave={handleTabLeave}>
            Support
          </span>
        </div>
        <div className="header-icon flex justify-end items-center res600:mb-5">
          {!currentUser && (
            <Link to="/login">
              <FontAwesomeIcon
                className="text-xl mr-5"
                icon={faUser}
              ></FontAwesomeIcon>
            </Link>
          )}
          {currentUser && <span onClick={() => signOut()}>Log Out</span>}
          <div className="flex justify-center items-center relative">

          <FontAwesomeIcon
            className="text-white rounded-[50%] text-xl p-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-5"
            icon={faShoppingCart}
            onClick={handleClickCart}
          ></FontAwesomeIcon>
          {countItems > 0 && <span className="w-[20px] h-[20px] rounded-[50%] flex items-center justify-center top-0 bg-[red] absolute text-white">{countItems}</span>}
          </div>
         
        </div>
      </header>
    </Fragment>
  );
};
function handleTabLeave(e) {
  e.target.classList.remove("border-b-2", "border-[#A055F4]", "pb-2");
}

function handleTabEnter(e) {
  e.target.classList.add("border-b-2", "border-[#A055F4]", "pb-2");
}
Header.defaultProps = {
  currentUser: null,
};

export default Header;
