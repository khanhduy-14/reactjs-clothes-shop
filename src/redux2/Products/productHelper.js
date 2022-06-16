import { firestore } from "./../../firebase/firebase-config";
export const handleAddProduct = (product) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("product")
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleUpdateProduct = (product) => {
  console.log(product);
  return new Promise((resolve, reject) => {
    firestore
      .collection("product")
      .doc(product.id)
      .update({
        name:product.name,
        image:product.image,
        price:product.price,
        size:product.size,
        color:product.color,
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("product")
      .get()
      .then((snapshot) => {
        const productsArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        resolve(productsArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteProduct = (documentID) => {
  console.log(documentID, 1);
  return new Promise((resolve, reject) => {
    firestore
      .collection("product")
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
