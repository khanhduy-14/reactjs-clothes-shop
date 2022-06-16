import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../components/forms/FormInput";
import { updateProduct } from "../redux2/Products/productAction";

const mapState = ({ productsData, user }) => ({
  updateproduct: productsData.updateproduct,
  currentUser: user.currentUser,
});

const UpdateProductPage = ({ item }) => {
  const dispatch = useDispatch();
  const { updateproduct, currentUser } = useSelector(mapState);
  let role = [];
  if (currentUser && Array.isArray(currentUser.userRoles)) {
    const { userRoles } = currentUser;
    role = userRoles;
  }
  const [name, setName] = useState(updateproduct.name);
  const [image, setImage] = useState(updateproduct.image);
  const [price, setPrice] = useState(updateproduct.price);
  const [colorarr, setColorArr] = useState(updateproduct.color.join(","));
  const [sizearr, setSizeArr] = useState(updateproduct.size.join(","));

  const handleSubmit = (e) => {
    e.preventDefault();
    const color = colorarr.split(",");
    const size = sizearr.split(",");

    const id = updateproduct.id;
    dispatch(
      updateProduct({
        id,
        name,
        image,
        price,
        color,
        size,
      })
    );
  };
  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center items-center res600:h-[600px] ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          UPDATE PRODUCT
        </span>
      </div>
      {role.includes("admin") && (
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
              Update Product
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateProductPage;
