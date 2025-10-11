import React, { useState } from "react";
import { FiX, FiShoppingCart } from "react-icons/fi";

const SidebarCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Dry Fruit Mix", price: 250, qty: 1 },
    { id: 2, name: "Cashew Nuts", price: 180, qty: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FiShoppingCart size={22} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>
                <p className="font-semibold">₹{item.price * item.qty}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between text-lg font-semibold mb-3">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-all duration-200">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarCart;
