import { Fragment } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import rootReducers from "./redux/reducer/rootReducer";

function App() {
  const store = createStore(rootReducers);
  return (
    <Provider store={store}>
      <Fragment>
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
      </Fragment>
    </Provider>
  );
}

export default App;
