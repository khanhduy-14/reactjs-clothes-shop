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
// import { render } from "@headlessui/react/dist/utils/render";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

const initialState = {
  currentUser: null,
};

class App extends Component {
  // const store = createStore(rootReducers);
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile({userAuth});
        userRef.onSnapshot(snapshot=> {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
        <Suspense fallback={<Spinner></Spinner>}>
          <Routes>
            <Route element={<Main currentUser={currentUser}></Main>}>
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
              <Route
                path="/login"
                element={
                  currentUser ? (
                    <Navigate replace to="/" />
                  ) : (
                    <LoginPage> </LoginPage>
                  )
                }
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </Fragment>
    );
  }
}
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
export default App;
