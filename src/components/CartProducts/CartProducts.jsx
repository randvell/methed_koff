import { useDispatch, useSelector } from "react-redux";
import s from "./CartProducts.module.scss";
import { API_URL } from "../../const";
import { removeProductFromCart } from "../../store/cart/cart.slice";

export const CartProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const handleMinus = (id) => {
    const existingProduct = products.find((product) => product.id === id);
    if (existingProduct && existingProduct.quantity === 1) {
      dispatch(removeProductFromCart(id));
    }
  };

  return (
    <ul className={s.products}>
      {products.map((product) => (
        <li className={s.product} key={product.id}>
          <img
            className={s.img}
            src={`${API_URL}/${product.images?.[0]}`}
            alt={product.name}></img>
          <h3 className={s.titleProduct}>{product.name}</h3>
          <p className={s.price}>{product.price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. {product.article}</p>
          <div className={s.productControl}>
            <button
              className={s.productBtn}
              onClick={() => handleMinus(product.id)}>
              -
            </button>
            <p className={s.productCount}>{product.quantity}</p>
            <button className={s.productBtn}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
