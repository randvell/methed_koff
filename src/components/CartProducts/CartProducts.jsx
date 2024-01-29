import { useDispatch } from "react-redux";
import s from "./CartProducts.module.scss";
import { API_URL } from "../../const";
import {
  removeProductFromCart,
  updateProductToCart,
} from "../../store/cart/cart.slice";

export const CartProducts = ({ products }) => {
  const dispatch = useDispatch();

  const handleMinus = (id, quantity) => {
    const existingProduct = products.find((product) => product.id === id);
    if (existingProduct && existingProduct.quantity === 1) {
      dispatch(removeProductFromCart(id));
    } else {
      dispatch(updateProductToCart({ productId: id, quantity: quantity - 1 }));
    }
  };

  const handlePlus = (id, quantity) => {
    dispatch(updateProductToCart({ productId: id, quantity: quantity + 1 }));
  };

  return (
    <ul className={s.products}>
      {products.map(
        ({ id, images: [image], name, price, article, quantity }) => (
          <li className={s.product} key={id}>
            <img className={s.img} src={`${API_URL}/${image}`} alt={name}></img>
            <h3 className={s.titleProduct}>{name}</h3>
            <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
            <p className={s.article}>арт. {article}</p>
            <div className={s.productControl}>
              <button
                className={s.productBtn}
                onClick={() => handleMinus(id, quantity)}>
                -
              </button>
              <p className={s.productCount}>{quantity}</p>
              <button
                className={s.productBtn}
                onClick={() => handlePlus(id, quantity)}>
                +
              </button>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};
