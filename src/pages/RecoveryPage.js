import React, { useState } from "react";
import FormInput from "../components/forms/FormInput";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const RecoveryPage = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          window.location.href = "/login";
        })
        .catch(() => {
          const err = ["Email wrong! Please try again"];
          setErrors(err);
        });
    } catch (error) {
      console.log(error);
    }
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
