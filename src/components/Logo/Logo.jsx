import { Link } from "react-router-dom";
import s from "./Logo.module.scss";

export const Logo = (props) => (
  <Link to="/" alt="Логотип мебельного магазина Koff" className={s.logo}>
    <img className={s.logo__icon} src="/icons/logo.svg"></img>
  </Link>
);
