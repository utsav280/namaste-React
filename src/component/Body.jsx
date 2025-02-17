import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRated = () => {
    const filteredList = listOfResturants.filter(
      (res) => res.info.avgRating > 4
    );
    console.log(filteredList);
    setFilteredList(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 className="text-center mt-4">
        You are offline. Please check your internet connection.
      </h1>
    );
  }

  return (
    <div className="bg-white">
      <div className="p-4 bg-gradient-to-r from-orange-300 to-orange-500 min-h-screen mt-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for Restaurants"
              className="p-2 rounded-lg w-full max-w-md"
            />
            <button
              className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={() => {
                const filteredResturant = listOfResturants.filter((res) =>
                  res.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredList(filteredResturant);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredList.length === 0 ? (
            <Shimmer />
          ) : (
            filteredList.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/resturant/" + restaurant.info.id}
              >
                {restaurant.info.externalRatings.aggregatedRating.rating >
                "4" ? (
                  <ResturantCardPromoted resData={restaurant.info} />
                ) : (
                  <ResturantCard resData={restaurant.info} />
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
