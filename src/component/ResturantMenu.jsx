import useResturantMenu from "../utils/useResturantMenu";
import Shimmmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";
import React, { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmmer />;
  }
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo.cards[2]?.card?.card?.info;
  // debugger;
  // const { itemCards } =
  //   resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log(categories);

  const itemCategory = categories.filter(
    (category) =>
      category.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(itemCategory);

  // code to get the NestedItemCategory
  // const nested = categories.filter(
  //   (category) =>
  //     category.card.card["@type"] ===
  //     "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  // );
  // console.log(nested);

  return (
    <div className="p-4 bg-orange-300 min-h-screen">
      <div className="bg-orange-200 rounded-lg shadow-lg p-6 h-auto max-w-none mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          {name}
        </h1>
        <p className="text-lg font-semibold text-gray-800 mb-4 text-center">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div className="p-6 mt-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Menu
        </h2>

        {itemCategory.map((category, index) => (
          <ResturantCategory
            key={category.card.card.itemCards[0].card.info.id}
            props={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
