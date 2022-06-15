import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeProductCard from "../components/homepage/HomeProductCard";
import Spinner from "../components/Spinner";
import ProductView from "../components/product/ProductView";
import ReactPaginate from "react-paginate";

const mapState = ({ productsData, cartData }) => ({
  products: productsData.products,
  viewProduct: productsData.viewProduct,
  loading: productsData.loading,
  cartItems: cartData.cartItems,
});
const ProductPage = () => {
  const { products, viewProduct, loading, cartItems } = useSelector(mapState);
  const cartPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
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
      </div>
    </div>
  );
};

export default ProductPage;
