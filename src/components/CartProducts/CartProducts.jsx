import s from "./CartProducts.module.scss";

export const CartProducts = () => {
  const test = 5;
  return (
    <ul className={s.products}>
      <li className={s.product} key={1}>
        <img
          className={s.img}
          src="https://koff-api.vercel.app//img/1hcgs1oc9f2vslir.jpg"
          alt="Название товара"></img>
        <h3 className={s.titleProduct}>Название товара</h3>
        <p className={s.price}>{"50000".toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 123543534</p>
        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>3</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};
