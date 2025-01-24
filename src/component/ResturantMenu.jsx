import useResturantMenu from "../utils/useResturantMenu";
import Shimmmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) {
    return <Shimmmer />;
  }
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img className="menu-img" src={CDN_URL + cloudinaryImageId} alt={name} />
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
