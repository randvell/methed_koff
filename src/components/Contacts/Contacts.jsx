import { Social } from "../Social/Social";
import { Phone } from "./Phone/Phone";
import s from "./Contacts.module.scss";

export const Contacts = () => (
  <div className={s.contacts}>
    <Phone />
    <Social />
  </div>
);
