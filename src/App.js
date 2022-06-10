import { Fragment, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import Main from "./components/layouts/Main";
import Spinner from "./components/Spinner";
import rootReducers from "./redux/reducer/rootReducer";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
function App() {
  const store = createStore(rootReducers);
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

export default App;
