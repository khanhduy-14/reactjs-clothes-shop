import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./../../firebase/firebase-config";

export const handleResetPasswordAPI = (email) => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ["Email wrong! Please try again"];
        reject(err);
      });
  });
};
