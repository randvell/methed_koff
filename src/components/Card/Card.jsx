import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import { Container } from "../../views/Container/Container";
import s from "./Card.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice";
import { API_URL } from "../../const";

export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbSwiper, setThumbSwiper] = useState(null);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  const { id, article, name, price, characteristics, images, category } = data;

  console.log(data);
  console.log(typeof data);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка: {error}</div>;
  }
  if (!data || !data.length) {
    return <div>No data</div>;
  }

  console.log("Data" + data);

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>{name}</h2>
        <div className={s.picture}>
          <div className={s.sliderMain}>
            <Swiper
              modules={[Thumbs]}
              thumbs={{ swiper: thumbSwiper }}
              onSwiper={setMainSwiper}
              spaceBetween={10}>
              {images.map((item, i) => (
                <SwiperSlide key={`swiper_main_${i}`}>
                  <img src={`${API_URL}/${item}`} alt={name} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button onClick={() => mainSwiper.slideNext()}></button>
            <button onClick={() => mainSwiper.slidePrev()}></button>
          </div>

          <div className={s.sliderThumbnails}>
            <Swiper
              onSwiper={setThumbSwiper}
              modules={[Thumbs]}
              watchSlidesProgress
              spaceBetween={14}
              slidesPerView={4}
              freeMode>
              {images.map((item, i) => (
                <SwiperSlide key={`swiper_thumb_${i}`}>
                  <img src={`${API_URL}/${item}`} alt={name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={s.info}>
          <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>{article}</p>
          <div className={s.characteristics}>
            <h3>Общие характеристики</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};
