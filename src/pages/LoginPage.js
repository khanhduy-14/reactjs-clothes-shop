import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import { emailSignInStart, googleSignInStart } from "./../redux2/User/userActions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});
const LoginPage = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };
  return (
    <div className="flex h-[400px] w-full items-center justify-center flex-col gap-3">
      <div
        className="px-14 py-3 text-black text-xl border-[1px] border-solid border-black rounded-xl"
        onClick={handleGoogleSignIn}
      >
        Login with google
      </div>
      <form onSubmit={handleSubmit}>
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
        <button className="px-8 py-4 border-2 border-solid border-black">
          Sign in
        </button>
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
  );
};

export default LoginPage;
