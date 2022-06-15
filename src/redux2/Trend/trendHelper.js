import { firestore } from "./../../firebase/firebase-config";

export const handleFetchTrends = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("trendShoes")
      .get()
      .then((snapshot) => {
        const trendsArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        resolve(trendsArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
