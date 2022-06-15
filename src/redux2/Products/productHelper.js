import { firestore } from "./../../firebase/firebase-config";

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('product')
      .get()
      .then(snapshot => {
        const productsArray = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        });
        resolve(productsArray);
      })
      .catch(err => {
        reject(err);
      })
  })
}



