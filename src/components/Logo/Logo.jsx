import s from "./Logo.module.scss";

export const Logo = (props) => (
  <div className={`${s.logo} ${props.className ? props.className : ""}`}>
    <img className="logo__icon" src="/icons/logo_icon.svg"></img>
    <img className="logo__name" src="/icons/logo.svg"></img>
  </div>
);
