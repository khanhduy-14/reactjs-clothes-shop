import React, { useState, useEffect } from "react";
import FormInput from "../components/forms/FormInput";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordStart } from "./../redux2/User/userActions";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr,
});

const RecoveryPage = (props) => {
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      window.location.href = "/login";
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPasswordStart({ email }));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center items-center res600:h-[600px] ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          RECOVERY
        </span>
      </div>

      <div className="flex h-[330px] p-5 border-black w-full items-center justify-center flex-col gap-4">
        {errors.length > 0 &&
          errors.map((item, index) => (
            <span className="font-bold font-mada text-xl" key={index}>
              {item}
            </span>
          ))}
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
          />
          <div className="flex justify-center">
            <button className="res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-8 py-3 rounded-xl hover:opacity-80">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RecoveryPage;
