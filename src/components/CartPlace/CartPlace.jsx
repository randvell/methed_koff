import { declOfNum } from "../../helpers/declOfNum";
import s from "./CartPlace.module.scss";

export const CartPlace = ({ totalCount, totalPrice }) => {
  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление</h3>
      <div className={s.placeInfo}>
        <p>{`${totalCount} ${declOfNum(totalCount, [
          "товар",
          "товара",
          "товаров",
        ])} на сумму:`}</p>
        <p>{totalPrice.toLocaleString()}&nbsp;₽</p>
      </div>
      <p className={s.placeDelivery}>Доставка 0&nbsp;₽</p>
      <button className={s.placeBtn} form="orderForm">
        Оформить заказ
      </button>
    </div>
  );
};
