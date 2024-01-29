import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import s from "./Order.module.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { clearOrder, fetchOrder } from "../../store/order/order.slice";

export const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { orderData, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrder(orderId));

    return () => {
      dispatch(clearOrder);
    };
  }, [dispatch, orderId]);

  if (loading) {
    return (
      <section className={s.order}>
        <Container className={s.container}>
          <h3>Получаем информацию о заказе...</h3>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className={s.order}>
        <Container className={s.container}>
          <h3>Ошибка при загрузке заказа: {error}</h3>
        </Container>
      </section>
    );
  }

  if (!orderData) {
    return (
      <section className={s.order}>
        <Container className={s.container}>
          <h3>Не удалось получить информацию о заказе</h3>
        </Container>
      </section>
    );
  }

  const {
    totalPrice,
    id,
    name,
    phone,
    email,
    address,
    paymentType,
    deliveryType,
  } = orderData;
  return (
    <section className={s.order}>
      <Container className={s.container}>
        <div className={s.content}>
          <div className={s.header}>
            <h2 className={s.title}>Заказ успешно размещен</h2>
            <p className={s.price}>{totalPrice?.toLocaleString()}&nbsp;₽</p>
          </div>

          <p className={s.number}>№{id}</p>

          <div className={s.tableWrapper}>
            <h3 className={s.tableTitle}>Данные доставки</h3>
            <table className={s.table}>
              <tbody>
                <tr className={s.row}>
                  <td className={s.field}>Получатель</td>
                  <td className={s.value}>{name}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Телефон</td>
                  <td className={s.value}>{phone}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>E-mail</td>
                  <td className={s.value}>{email}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Адрес доставки</td>
                  <td className={s.value}>{address}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ оплаты</td>
                  <td className={s.value}>{paymentType}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ получения</td>
                  <td className={s.value}>{deliveryType}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link className={s.back} to="/">
            На главную
          </Link>
        </div>
      </Container>
    </section>
  );
};
