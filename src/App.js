import { Fragment, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Spinner from "./components/Spinner";

import { checkUserSession } from "./redux2/User/userActions";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Main = lazy(() => import("./components/layouts/Main"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const RecoveryPage = lazy(() => import("./pages/RecoveryPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = (props) => {
  useScrollToTop();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Fragment>
      <Suspense fallback={<Spinner></Spinner>}>
        <Routes>
          <Route path="*" element={<NotFoundPage></NotFoundPage>} />
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
            <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
            <Route
              path="/aboutus"
              element={<AboutUsPage></AboutUsPage>}
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
