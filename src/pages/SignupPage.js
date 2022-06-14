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
    <div className="flex h-[400px] w-full items-center justify-center flex-col gap-3">
      {errors.length > 0 &&
        errors.map((err, index) => {
          return <span key={index}>{err}</span>;
        })}
      <form onSubmit={handleFormSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          handleChange={(e) => setConfirmPassWord(e.target.value)}
        />
        <button className="px-8 py-4 border-2 border-solid border-black">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
