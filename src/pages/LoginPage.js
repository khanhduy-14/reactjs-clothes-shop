import React from "react";
import {signInWithGoogle} from "./../firebase/firebase-config"
const LoginPage = () => {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <div className="px-14 py-3 text-black text-xl border-[1px] border-solid border-black rounded-xl"
      onClick={signInWithGoogle}>
        Login with google
      </div>
    </div>
  );
};

export default LoginPage;
