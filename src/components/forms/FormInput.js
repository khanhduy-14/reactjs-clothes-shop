import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="">
      {label && <label>{label}</label>}

      <input className="forminput" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
