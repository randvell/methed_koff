import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/cart/cart.slice";

export const AddToCartButton = ({ id, className }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const isInCart = products.find((item) => item.id === id);

  const handleClick = () => {
    if (!isInCart) {
      dispatch(addProductToCart({ productId: id, quantity: 1 }));
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {isInCart ? "Из корзины" : "В корзину"}
    </button>
  );
};
