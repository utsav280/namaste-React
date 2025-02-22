import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 bg-orange-400 min-h-screen">
      <div className=" container w-9/12  mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-semibold text-gray-900 mb-4">
          Cart
        </h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 hover:bg-red-600 focus:outline-none"
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700">Your cart is empty.</p>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
