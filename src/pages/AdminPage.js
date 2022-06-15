import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import {
  addProductStart,
  deleteProductStart,
} from "../redux2/Products/productAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRefresh } from "@fortawesome/free-solid-svg-icons";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const AdminPage = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [colorarr, setColorArr] = useState("");
  const [sizearr, setSizeArr] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const resetForm = () => {
    setName("");
    setImage("");
    setPrice(0);
    setSizeArr("");
    setColorArr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const color = colorarr.split(",");
    const size = sizearr.split(",");
    dispatch(
      addProductStart({
        name,
        image,
        price,
        color,
        size,
      })
    );
    resetForm();
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center items-center res600:h-[600px] ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          ADMIN PAGE
        </span>
      </div>
      <div className="flex h-[800px] w-full items-center justify-center flex-col gap-3">
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <FormInput
            type="text"
            value={name}
            placeholder="Name Product"
            handleChange={(e) => setName(e.target.value)}
            className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
          />
          <FormInput
            type="url"
            value={image}
            placeholder="Link Image"
            handleChange={(e) => setImage(e.target.value)}
            className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
          />
          <FormInput
            type="number"
            value={price}
            min="0.00"
            max="10000.00"
            step="1"
            placeholder="Price"
            handleChange={(e) => setPrice(e.target.value)}
            className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
          />
          <FormInput
            type="text"
            value={colorarr}
            placeholder="Colors"
            handleChange={(e) => setColorArr(e.target.value)}
            className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
          />
          <FormInput
            type="text"
            value={sizearr}
            placeholder="Sizes"
            handleChange={(e) => setSizeArr(e.target.value)}
            className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
          />
         <button className="res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-8 py-3 rounded-xl hover:opacity-80">
            Add Product
          </button>
        </form>
        <div className="h-[400px] overflow-auto flex flex-col gap-3">
          {currentItems.length > 0 &&
            currentItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-around items-center w-[310px] text-sm border-2 border-solid gap-2 border-black rounded-lg"
              >
                <span>{item.name}</span>
                <div className="flex justify-around w-full items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[40px] h-[40px] rounded-xl object-cover"
                  />
                  <div className="flex gap-3">
                    <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => dispatch(deleteProductStart(item.id))}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="flex  gap-3 justify-around items-center bg-slate-400 w-full">
                  <div className="flex gap-2">
                    <span>Color:</span>

                    {item.color.map((color) => (
                      <div
                        className="color-pick order-color-check w-5 h-5 rounded-full shadow-xl"
                        style={{ backgroundColor: color }}
                        key={color}
                      ></div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <span>Size:</span>
                    {item.size.map((size) => (
                      <span key={size} className="pointer-events-none">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <span>{item.price}$</span>
              </div>
            ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num border-2 border-black border-solid px-3 py-2  text-black bg-slate-400 hover:opacity-70"
          previousLinkClassName="page-num border-2 border-black border-solid px-3 py-2  text-black bg-slate-400 hover:opacity-70"
          nextLinkClassName="page-num border-2 border-black border-solid px-3 py-2  text-black bg-slate-400 hover:opacity-70"
          activeLinkClassName="active bg-[#A055F4] text-white"
          className="flex gap-3"
        />
      </div>
    </>
  );
};

export default AdminPage;
