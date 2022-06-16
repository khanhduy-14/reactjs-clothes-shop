import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import {
  emailSignInStart,
  googleSignInStart,
  resetStateResetPass,
} from "./../redux2/User/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});
const LoginPage = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  useEffect(() => {
    if (currentUser) {
      resetForm();
      window.location.href = "/";
    }
  }, [currentUser]);
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    dispatch(resetStateResetPass());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password cannot be blank");
    }
    if (email && password) {
      dispatch(emailSignInStart({ email, password }));

      setError("");
    }
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };
  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[200px] flex flex-col justify-center items-center res600:h-[600px] ">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[50%] w-full"></div>
        <span className="text-pop text-[40px] text- font-bold text-white">
          LOGIN PAGE
        </span>
      </div>
      <div className="w-full flex items-center justify-center h-[600px]">
        <div className="flex p-5 w-[320px] items-center justify-center flex-col gap-3 border-2 border-black rounded-lg">
          <div
            className=" res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-14 py-3 hover:opacity-80 text-xl border-[1px] border-solid  rounded-xl"
            onClick={handleGoogleSignIn}
          >
            Login with google
          </div>
          {error && (
            <span className="font-bold font-mada text-sm text-red-600">
              *{error}
            </span>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl"
            />
            <div className="relative">
              <FormInput
                type={isHiddenPassword ? "password" : "text"}
                name="password"
                value={password}
                placeholder="Password"
                handleChange={(e) => setPassword(e.target.value)}
                className="border-2 border-black rounded-lg w-[300px] pl-2 text-xl relative"
              />
              {!isHiddenPassword && (
                <FontAwesomeIcon
                  icon={faEye}
                  className="absolute top-[50%] translate-y-[-50%] right-[10px]"
                  onClick={() => setIsHiddenPassword((prev) => !prev)}
                ></FontAwesomeIcon>
              )}
              {isHiddenPassword && (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="absolute top-[50%] translate-y-[-50%] right-[10px]"
                  onClick={() => setIsHiddenPassword((prev) => !prev)}
                ></FontAwesomeIcon>
              )}
            </div>
            <div className="flex justify-center">
              <button className="res600:self-center res600:mx-auto shadow-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-5 w-[120px] py-3 rounded-xl hover:opacity-80">
                Sign In
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-3">
            <Link to="/recovery">
              <span className="text-blue-500">You forgot password?</span>
            </Link>
            <div>
              <span>You don't have accout? Please </span>
              <Link to="/signup">
                <span className="text-blue-500">sign up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
