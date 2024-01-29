import { useDispatch, useSelector } from "react-redux";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import s from "./Cart.module.scss";

export const Cart = () => {
  const { products, totalPrice, totalCount } = useSelector(
    (state) => state.cart,
  );

  if (!products || !products.length) {
    return (
      <section className={s.cart}>
        <Container className={s.container}>
          <h2 className={s.title}>Корзина</h2>
          <p>Корзина пуста</p>
        </Container>
      </section>
    );
  }

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts products={products} />
        <CartPlace totalPrice={totalPrice} totalCount={totalCount} />
        <CartForm />
      </Container>
    </section>
  );
};
