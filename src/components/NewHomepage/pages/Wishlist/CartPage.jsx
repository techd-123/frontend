import React from "react";
import { useCart } from "../../../../context/CartContext";
const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border p-3 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.location}</p>
                    <p className="text-gray-700 text-sm">₹{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
