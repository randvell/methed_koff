import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import s from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { useLocation, useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const [searchParam] = useSearchParams();
  const { pathname } = useLocation();
  const category = searchParam.get("slug");
  const q = searchParam.get("q");

  const fetchParams = {};
  if (pathname === "/favorite") {
    fetchParams.list = favoriteList;
  } else {
    fetchParams.category = category;
    fetchParams.q = q;
  }

  useEffect(() => {
    dispatch(fetchProducts(fetchParams));
  }, [dispatch, favoriteList, category, q, pathname]);

  if (loading) {
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <div>Ошибка: {error}</div>
      </Container>
    );
  }

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        {data.length ? (
          <ul className={s.list}>
            {data.map((item) => (
              <li key={item.id}>
                <CardItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <div>По вашему запросу ничего не найдено</div>
        )}
      </Container>
    </section>
  );
};
