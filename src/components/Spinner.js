import React from "react";

const Spinner = () => {
  let circleCommonClasses = "h-4 w-4 bg-blue-600 rounded-full";

  return (
    <div className="flex absolute top-[50%] left-[50%] translate-x-[-50%] translat-y-[-50%]">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export default Spinner;
