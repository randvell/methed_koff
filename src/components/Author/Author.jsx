import s from "./Author.module.scss";

export const Author = () => (
  <div className={s.author}>
    <p className={s.author__item}>Designer: Anastasia Ilina</p>
    <p className={s.author__item}>Developer: Nikita Zimin</p>
  </div>
);
