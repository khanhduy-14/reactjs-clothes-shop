# KDShop | E-commerce reactjs app
Simple ecommerce 
<img src="https://img.icons8.com/dotty/344/react.png" width="20" heigh="20"> ReactJS 
app with 
<img src="https://img.icons8.com/color/344/redux.png" width="20" heigh="20"> Redux,
<img src="https://symbols.getvecta.com/stencil_97/3_tailwind-css-icon.5009c3dbea.svg" width="20" heigh="20"> Tailwindcss,
<img src="https://img.icons8.com/color/344/firebase.png" width="20" heigh="20"> Firebase.

### [Live demo:](https://kdshop-c042b.web.app/) https://kdshop-c042b.web.app/

![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/demo.png)

## Images of app

<details>
  <summary>Homepage</summary>
  
![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/homepage1.PNG)
![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/homepage2.PNG)
![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/homepage3.PNG)
 ![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/homepage4.PNG)
  
</details>
<details>
  <summary>Shop</summary>
  
![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/productpage.PNG)

  
</details>

<details>
  <summary>Product view</summary>
  
![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/productview.PNG)

  
</details>

<details>
  <summary>Cart</summary>
  
![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/cartview.PNG)

 
</details>

<details>
  <summary>Admin (CRUD Products)</summary>
  
![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/crud.PNG)
  
</details>

<details>
  <summary>Sign in</summary>

![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/loginpage.PNG)

</details>

<details>
  <summary>Sign up</summary>

![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/signup.PNG)


</details>

<details>
  
  <summary>Reset Password</summary>

![](https://raw.githubusercontent.com/tranhakhanhduy/KDshop/master/readmeimg/resetpassword.PNG)


</details>


## Run Locally

<details>
  <summary>1. Install Dependencies</summary>
  
```sh
$ npm install
```
  
</details>
  
 <details>
  <summary>2. Create a new firebase project</summary>
Login to your google account and create a new firebase project [here](https://console.firebase.google.com/u/0/)

Open `firebase-config.js` file on folder `firebase` and add the following configuration details. You can either use the same configuration details for both development and production but it's best to make separate projects. It can be found on your firebase project settings.

```
// SAMPLE CONFIG .firebase-config, you should put the actual config details found on your project settings
apiKey: "AIzaSyDY7XNn23_WP7AEmeX4eq9C6BchQsbn1l0",
authDomain: "kdshop-c042b.firebaseapp.com",
projectId: "kdshop-c042b",
storageBucket: "kdshop-c042b.appspot.com",
messagingSenderId: "165995465769",
appId: "1:165995465769:web:1fa0ba5f55f313ab46a038",
``` 

After setting up necessary configuration,
create a **Database** and choose **Cloud Firestore** and start in test mode
</details>

<details>
  <summary>3. Run development server</summary>
  
```sh 
$ npm run dev-server
```
  
</details>

<details>
  <summary>4. Build the project</summary>
  
```sh
$ npm run build
```
  
</details>

## How to add products or perform CRUD operations for Admin
<details>
  
  <summary>Click here view detail</summary>
  
1. Navigate to your site to `/login`
2. Create an account for yourself
3. Go to your firestore collection `users collection` and edit the account you've just created. Change the role from `user` to `admin`.
4. Reload or sigin again to see the changes. 
  
</details>

## Features
<details>
  
  <summary>Click here view detail</summary>
  
* Admin CRUD products
* Firebase authentication
* Account creation
* Google Provider (Sign in with gmail)
  
  </details>

