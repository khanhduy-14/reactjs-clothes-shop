import { Fragment, lazy, Suspense, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Main from "./components/layouts/Main";
import Spinner from "./components/Spinner";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
// import { render } from "@headlessui/react/dist/utils/render";
import RecoveryPage from "./pages/RecoveryPage";
import { checkUserSession } from "./redux2/User/userActions";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
            <Route
              path="/products"
              element={<ProductPage></ProductPage>}
            ></Route>
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

export default App;
