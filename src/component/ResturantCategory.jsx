import React from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ props, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  //   showItems = true;
  return (
    <div>
      {/* Header */}
      <div className="  w-9/12 mx-auto my-4 bg-gray-50 shadow-xl rounded-lg p-4">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="text-xl font-semibold">
            {" "}
            {props.title} ( {props.itemCards.length} )
          </span>
          <span>🔽</span>
        </div>
        {/* {console.log("showItems", showItems)}; */}
        {showItems && <ItemList items={props.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
