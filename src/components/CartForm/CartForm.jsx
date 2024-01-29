import { useDispatch, useSelector } from "react-redux";
import s from "./CartForm.module.scss";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { submitCartFrom } from "../../store/formCart/formCartSlice";

export const CartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderStatus = useSelector((state) => state.formCart);

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/order/${orderStatus.orderId}`);
    }
  }, [orderStatus, navigate]);

  const onSubmit = (data) => {
    dispatch(submitCartFrom(data));
  };

  return (
    <form className={s.form} id="orderForm" onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.subtitle}>Данные для доставки</h3>
      <fieldset className={s.fieldsetInput}>
        <label>
          <input
            className={s.input}
            type="text"
            placeholder="Фамилия Имя Отчество"
            {...register("name", { required: true })}
          />
          {errors.name && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input
            className={s.input}
            type="text"
            placeholder="Телефон"
            {...register("phone", { required: true })}
          />
          {errors.phone && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input
            className={s.input}
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          {errors.email && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          {" "}
          <input
            className={s.input}
            type="text"
            placeholder="Адрес доставки"
            {...register("address", { required: true })}
          />
          {errors.address && <p className={s.error}>Это поле обязательное</p>}
        </label>

        <label>
          <textarea
            className={s.textarea}
            placeholder="Комментарий к заказу"
            {...register("comments")}
          />
        </label>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            value="delivery"
            type="radio"
            {...register("deliveryType", { required: true })}
          />
          Доставка
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            value="pickup"
            type="radio"
            {...register("deliveryType", { required: true })}
          />
          Самовывоз
        </label>
      </fieldset>
      {errors.deliveryType && <p className={s.error}>Выберите тип доставки</p>}

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            value="card"
            type="radio"
            {...register("paymentType", { required: true })}
          />
          Картой при получении
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            value="cash"
            type="radio"
            {...register("paymentType", { required: true })}
          />
          Наличными при получении
        </label>
        {errors.paymentType && (
          <p className={s.error}>Выберите способ оплаты</p>
        )}
      </fieldset>
    </form>
  );
};
