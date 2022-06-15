import React, { useState, useEffect } from "react";
import FormInput from "../components/forms/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserStart } from "./../redux2/User/userActions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const SignupPage = (props) => {
  const { currentUser, userErr } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      resetForm();
      window.location.href = "/";
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassWord("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        email,
        password,
        confirmPassword,
      })
    );
  };

  return (
    <> 
     <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center items-center res600:h-[600px] ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          SIGN UP 
        </span>
      </div>
    <div className="flex h-[400px] w-full items-center justify-center flex-col gap-3">
      {errors.length > 0 &&
        errors.map((err, index) => {
          return <span className="font-bold font-mada text-xl" key={index}>{err}</span>;
        })}
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <FormInput
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          handleChange={(e) => setEmail(e.target.value)}
          className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"

        />
        <FormInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          handleChange={(e) => setPassword(e.target.value)}
          className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"

        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          handleChange={(e) => setConfirmPassWord(e.target.value)}
          className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"

        />
        <div className="flex justify-center">
            <button className="res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-8 py-3 rounded-xl hover:opacity-80">
              Sign Up
            </button>
          </div>
      </form>
    </div>
    </>
  );
};

export default SignupPage;
