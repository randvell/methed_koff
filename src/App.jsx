import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";

import { Header } from "./views/Header/Header";
import { Goods } from "./views/Goods/Goods";
import { Footer } from "./views/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog";
import { Card } from "./components/Card/Card";
import { Container } from "./views/Container/Container";
import { Cart } from "./views/Cart/Cart";

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
    path: "/favorite",
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
    path: "/cart",
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
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
    path: "*",
    element: (
      <>
        <Header />
        <main>
          <Container>
            <h1>Эта страница не существует</h1>
          </Container>
        </main>
        <Footer />
      </>
    ),
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
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );
  }

  return <RouterProvider router={router} />;
};

export default App;
