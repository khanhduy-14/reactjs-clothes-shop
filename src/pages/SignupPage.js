import React, { useState } from "react";
import FormInput from "../components/forms/FormInput";
import { auth, handleUserProfile } from "./../firebase/firebase-config";

const SignupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassWord("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Password dont' match"];
      setErrors(err);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile({ user });
      resetForm();
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
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
