import s from "./CardItem.module.scss";

export const CardItem = ({ itemData }) => {
  const { id, name, price, images } = itemData;
  return (
    <article className={s.card}>
      {images[0] ? (
        <a className={s.link} href={`/products/id/${id}`}>
          <img
            className={s.img}
            src={`https://koff-api.vercel.app/${images[0]}`}
            alt={`Изображение товара ${name}`}></img>
        </a>
      ) : (
        ""
      )}
      <div className={s.info}>
        <a className={s.link} href="#">
          <span className={s.title}>{name}</span>
        </a>

        <span className={s.price}>{price} ₽</span>
      </div>
      <button className={s.btn}>В корзину</button>
      <button className={s.favorite}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            // eslint-disable-next-line max-len
            d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
            fill="white"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </article>
  );
};
