import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo_header.png";
import { NavLink } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase-config";

const Header = () => {
  const colRef = collection(db, "product");
  const dispatch = useDispatch();

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
        <FontAwesomeIcon
          className="text-xl mr-5"
          icon={faSearch}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-white rounded-[50%] text-xl p-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-5"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </div>
    </header>
  );
};
function handleTabLeave(e) {
  e.target.classList.remove("border-b-2", "border-[#A055F4]", "pb-2");
}

function handleTabEnter(e) {
  e.target.classList.add("border-b-2", "border-[#A055F4]", "pb-2");
}
export default Header;
