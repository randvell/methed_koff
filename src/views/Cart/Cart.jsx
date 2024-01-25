import { useDispatch, useSelector } from "react-redux";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import s from "./Cart.module.scss";
import { fetchCart } from "../../store/cart/cart.slice";
import { useEffect } from "react";

export const Cart = () => {
  const dispatch = useDispatch();
  const { loadingFetch: loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <div>Ошибка: {error}</div>
      </Container>
    );
  }

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзинка</h2>
        <CartProducts />
        <CartPlace />
        <CartForm />
      </Container>
    </section>
  );
};
