import s from "./Logo.module.scss";

export const Logo = (props) => (
  <a href="/" alt="Логотип мебельного магазина Koff" className={s.logo}>
    <img className={s.logo__icon} src="/icons/logo.svg"></img>
  </a>
);
