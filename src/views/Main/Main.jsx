import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../../components/Goods/Goods";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { fetchProducts } from "../../store/products/products.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories || loadingProducts) {
    return <div>Загрузка...</div>;
  }
  if (errorCategories) {
    return <div>Ошибка: {errorCategories}</div>;
  }
  if (errorProducts) {
    return <div>Ошибка: {errorProducts}</div>;
  }

  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
    </main>
  );
};
