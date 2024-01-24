import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import s from "./Cart.module.scss";

export const Cart = () => {
  const test = 5;
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
