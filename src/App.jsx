import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";

import { Header } from "./views/Header/Header";
import { Goods } from "./views/Goods/Goods";
import { Footer } from "./views/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog";
import { Card } from "./components/Card/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: <></>,
  },
  {
    path: "/favorite",
    element: <></>,
  },
  {
    path: "/cart",
    element: <></>,
  },
  {
    path: "/search",
    element: <></>,
  },
  {
    path: "/404",
    element: <></>,
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
