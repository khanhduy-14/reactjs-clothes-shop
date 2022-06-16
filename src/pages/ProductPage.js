import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeProductCard from "../components/homepage/HomeProductCard";
import Spinner from "../components/Spinner";
import ProductView from "../components/product/ProductView";
import ReactPaginate from "react-paginate";
import FormInput from "../components/forms/FormInput";


const mapState = ({ productsData, cartData }) => ({
  products: productsData.products,
  viewProduct: productsData.viewProduct,
  loading: productsData.loading,
  cartItems: cartData.cartItems,
});
const ProductPage = () => {
  const { products, viewProduct, loading } = useSelector(mapState);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [filter, setFilter] = useState("");
  let dataSearch = products.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
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
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center w-full items-center res600:h-[600px] ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          SHOP
        </span>
      </div>
      {loading && <Spinner></Spinner>}
      {viewProduct && <ProductView></ProductView>}

      <div className="flex justify-center flex-col items-center h-[1200px] res1024:h-[3600px] ">
        <div className="flex justify-center items-center h-[50px]">
          <FormInput
            type="text"
            value={filter}
            placeholder="Search name..."
            onChange={(e) => {
              setFilter(e.target.value);
              console.log(dataSearch);
              console.log(filter);
            }}
            className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
          />
        </div>
        {filter && (
          <div className="grid grid-cols-3 gap-10 h-[900px] overflow-y-scroll mt-10 ml-5 res1024:h-[3400px] res1024:grid-cols-1 res1024:gap-0  res1024:mt-2 res1024:ml-0">
            {dataSearch &&
              dataSearch.map((item) => (
                <HomeProductCard key={item.id} item={item}></HomeProductCard>
              ))}
          </div>
        )}
        {!filter && (
          <>
            <div className="grid grid-cols-3 gap-10 h-[900px] mt-10 ml-5 res1024:h-[3400px] res1024:grid-cols-1 res1024:gap-0  res1024:mt-2 res1024:ml-0">
              {currentItems &&
                currentItems.map((item) => (
                  <HomeProductCard key={item.id} item={item}></HomeProductCard>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
