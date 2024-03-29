import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../store/favorite/favorite.slice";

export const FavoriteButton = ({ className, id }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const isFavorite = favoriteList.includes(id);
  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <button
      className={className}
      onClick={handleFavoriteClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
          fill={hover !== isFavorite ? "#780096" : "#ffffff"}
          stroke={hover !== isFavorite ? "#780096" : "#1c1c1c"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
