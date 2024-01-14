import s from "./CardItem.module.scss";

export const CardItem = () => (
  <article className={s.card}>
    <a className={s.link} href="#">
      <img
        className={s.image}
        src="/images/photo.jpg"
        alt="Изображение товара магазина"></img>
    </a>
    <div className={s.product_info}>
      <a className={s.link} href="#">
        <span className={s.title}>Кресло с подлокотниками</span>
      </a>

      <span className={s.price}>5 000 ₽</span>
    </div>
    <button className={s.button}>В корзину</button>
  </article>
);
