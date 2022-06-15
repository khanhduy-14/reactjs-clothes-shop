import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { viewProduct,viewProductStart} from "../../redux2/Products/productAction";

const HomeProductCard = ({ item }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  function useClickDetail() {
    dispatch(viewProductStart({item}));
  }

  return (
    <Fragment>
      <div
        className="home-product-card bg-white shadow-xl border-0 border-solid w-[300px] h-[400px] rounded-xl tablet768:w-[240px] res600:w-[320px] res600:h-[500px] res600:object-cover"
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={useClickDetail}
      >
        <div className="card-img h-[80%] w-full rounded-t-xl relative pointer-events-none">
          {hover && <Overlay></Overlay>}
          <img
            src={item.image}
            alt=""
            className="h-[100%] w-full rounded-t-xl cursor-none"
          />
        </div>

        <div className="card-info flex flex-col items-center justify-center h-[20%] pointer-events-none">
          <h3 className="text-lg text-pop text-black text-center">
            {item.name}
          </h3>
          <span className="text-2xl text-mada text-[#48CFAD]">
            {item.price}$
          </span>
        </div>
      </div>
    </Fragment>
  );
};
function handleButtonLeave(e) {
  e.target.classList.remove("bg-white", "!text-[#48CFAD]");
}

function handleButtonOver(e) {
  e.target.classList.add("bg-white", "!text-[#48CFAD]");
}

function Overlay() {
  return (
    <div className="absolute bg-[#48daa1] t-0 l-0 w-full h-full rounded-t-xl flex justify-center items-center">
      <button
        className="uppercase border-2 border-white text-white text-pop text-lg  px-8 py-3 rounded-lg font-bold"
        onMouseOver={handleButtonOver}
        onMouseLeave={handleButtonLeave}
      >
        View Detail
      </button>
    </div>
  );
}

export default HomeProductCard;
