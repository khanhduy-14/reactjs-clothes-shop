import { Fragment, lazy, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { createStore } from "redux";
import Main from "./components/layouts/Main";
import Spinner from "./components/Spinner";
import LoginPage from "./pages/LoginPage";
import rootReducers from "./redux/reducer/rootReducer";
import { auth, handleUserProfile } from "./firebase/firebase-config";
import { Component } from "react";
import SignupPage from "./pages/SignupPage";
// import { render } from "@headlessui/react/dist/utils/render";
import RecoveryPage from "./pages/RecoveryPage";
import { setCurrentUser } from "./redux2/User/userActions";
import { connect } from "react-redux";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

const App = (props) => {
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile({ userAuth });
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      authListener();
    };
  }, []);

  return (
    <Fragment>
      <Suspense fallback={<Spinner></Spinner>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            {/* <Route
              path="/products"
              element={<ProductPage></ProductPage>}
            ></Route> */}
            <Route path="/login" element={<LoginPage> </LoginPage>}></Route>
            <Route path="/signup" element={<SignupPage> </SignupPage>}></Route>
            <Route
              path="/recovery"
              element={<RecoveryPage></RecoveryPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
