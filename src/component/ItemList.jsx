import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import React from "react";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch the addItem action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center p-4 border-b border-gray-200 transition duration-300 hover:shadow-lg hover:transform hover:scale-105"
        >
          {/* Image Container with fixed size */}
          <div className="relative w-4/12 h-40">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            {/* Button Positioned Below the Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-1 px-6 rounded-md shadow-md transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>

          {/* Right side content: Name, Description, Price */}
          <div className="ml-4 w-8/12 flex-grow">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.card.info.name}
            </h3>
            <p className="text-md text-gray-700 font-semibold">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p className="text-sm text-gray-700">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
