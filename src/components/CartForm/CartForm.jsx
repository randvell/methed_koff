import s from "./CartForm.module.scss";

export const CartForm = () => {
  const test = 5;
  return (
    <form className={s.form}>
      <h3 className={s.subtitle}>Данные для доставки</h3>
      <fieldset className={s.fieldsetInput}>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="Фамилия Имя Отчество"
        />
        <input
          className={s.input}
          type="text"
          name="phone"
          placeholder="Телефон"
        />
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          className={s.input}
          type="text"
          name="address"
          placeholder="Адрес доставки"
        />
        <textarea
          className={s.textarea}
          name="comments"
          placeholder="Комментарий к заказу"
        />
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            name="deliveryType"
            value="delivery"
            type="radio"
          />
          Доставка
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            name="deliveryType"
            value="pickup"
            type="radio"
          />
          Самовывоз
        </label>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            name="paymentType"
            value="card"
            type="radio"
          />
          Картой при получении
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            name="paymentType"
            value="cash"
            type="radio"
          />
          Наличными при получении
        </label>
      </fieldset>
    </form>
  );
};
