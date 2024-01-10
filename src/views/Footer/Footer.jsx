import { Author } from "../../components/Author/Author";
import { Contacts } from "../../components/Contacts/Contacts";
import { Copyright } from "../../components/Copyright/Copyright";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import s from "./Footer.module.scss";

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.container}>
      <Logo />
      <Contacts />
      <Author />
      <Copyright />
    </Container>
  </footer>
);
