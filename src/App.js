import { Fragment, lazy, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { createStore } from "redux";
import Main from "./components/layouts/Main";

import Spinner from "./components/Spinner";
import rootReducers from "./redux/reducer/rootReducer";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
function App() {
  const store = createStore(rootReducers);
  useScrollToTop();
  return (
    <Provider store={store}>
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
            </Route>
          </Routes>
        </Suspense>
      </Fragment>
    </Provider>
  );
}
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
export default App;
