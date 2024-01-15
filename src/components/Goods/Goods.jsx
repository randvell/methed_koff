import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./Goods.module.scss";

export const Goods = ({ data }) => (
  <section className={s.goods}>
    <Container>
      <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>

      <ul className={s.list}>
        {data.map((item) => (
          <li key={item.id}>
            <CardItem itemData={item} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
