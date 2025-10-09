import React from "react";
import { useCart } from "../../../../context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaShoppingCart className="text-pink-600" /> Your Cart
          </h2>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="mt-3 sm:mt-0 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg transition-all"
            >
              <FiTrash2 /> Clear Cart
            </button>
          )}
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <FaShoppingCart className="mx-auto text-gray-400 text-5xl mb-4" />
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
            <a
              href="/venues"
              className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
            >
              Browse Venues
            </a>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-pink-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full sm:w-32 h-40 sm:h-28 object-cover rounded-lg"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.location}</p>
                    <p className="text-pink-600 font-semibold mt-1">
                      ₹{item.price}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {item.capacity} Guests
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.title)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="sticky bottom-0 bg-white border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-0">
              <div className="text-center sm:text-left">
                <p className="text-gray-500 text-sm">Total Amount</p>
                <p className="text-2xl font-bold text-pink-600">
                  ₹{total.toLocaleString()}
                </p>
              </div>
              <button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow transition-all">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
