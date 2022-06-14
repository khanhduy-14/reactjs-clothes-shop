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
    <div className="flex h-[400px] w-full items-center justify-center flex-col gap-3">
      {errors.length > 0 &&
        errors.map((item, index) => <span key={index}>{item}</span>)}
      <form onSubmit={handleFormSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button className="px-8 py-4 border-2 border-solid border-black">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default RecoveryPage;
