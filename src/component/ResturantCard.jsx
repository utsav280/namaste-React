import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  if (!resData) return null;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  const { deliveryTime } = resData.sla;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105 duration-300 flex flex-col justify-between h-full">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-700 mb-1">
          Rating: <span className="font-semibold">{avgRating}⭐</span>
        </p>
        <p className="text-sm text-gray-700 mb-1">
          Cost for Two: <span className="font-semibold">{costForTwo}</span>
        </p>
        <p className="text-sm text-gray-700">
          Delivery Time:{" "}
          <span className="font-semibold">{deliveryTime} minutes</span>
        </p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative transition transform hover:scale-105 duration-300 flex flex-col h-full">
        {/* Keeping the "PROMOTED" label absolute to overlap at the top of the card */}
        <div className="absolute top-0 left-0 bg-gray-500 text-white px-2 py-1 rounded-tl-lg z-10">
          PROMOTED
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
