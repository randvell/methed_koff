import s from "./Social.module.scss";

export const Social = () => (
  <div className={s.social}>
    <img className={s.social__item} src="/icons/tg.svg"></img>
    <img className={s.social__item} src="/icons/youtube.svg"></img>
    <img className={s.social__item} src="/icons/vk.svg"></img>
  </div>
);
