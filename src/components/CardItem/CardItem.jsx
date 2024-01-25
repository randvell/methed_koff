import { Link } from "react-router-dom";
import { API_URL } from "../../const";
import s from "./CardItem.module.scss";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";

export const CardItem = ({ id, name, price, images: [image] }) => (
  <article className={s.card}>
    {image ? (
      <Link className={s.link} to={`/product/${id}`}>
        <img
          className={s.img}
          src={`${API_URL}/${image}`}
          alt={`Изображение товара ${name}`}></img>
      </Link>
    ) : (
      ""
    )}

    <div className={s.info}>
      <h3 className={s.title}>
        <Link className={s.link} href={`/product/${id}`}>
          {name}
        </Link>
      </h3>

      <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
    </div>
    <AddToCartButton className={s.btn} id={id} />
    <FavoriteButton className={s.favorite} id={id} />
  </article>
);
