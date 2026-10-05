import React, { useState, useEffect } from "react";
import { ShoppingCart, Trash2, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router";

const AddToCart = () => {
  const { id } = useParams(); // URL Param listener

  // LAZY STATE INITIALIZATION: Component render hotay hi seedha Storage se saara array load karega
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Jab bhi URL ka Product ID change ho, storage dobara Sync karein
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, [id]);

  // Item Delete handler
  const handleRemoveItem = (removeId) => {
    const updatedCart = cartItems.filter(
      (item) => String(item.id) !== String(removeId),
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Total Calculation
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121640] via-[#0b0e26] to-[#050716] text-white p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center pb-6 border-b border-indigo-900/50">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-indigo-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Your Shopping Cart
            </h1>
          </div>
          <div className="bg-indigo-950/60 border border-indigo-700/40 px-4 py-2 rounded-xl text-sm font-medium text-indigo-200">
            Total Products:{" "}
            <span className="text-indigo-400 font-bold">
              {cartItems.length}
            </span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-20 bg-indigo-950/20 backdrop-blur-md rounded-2xl border border-indigo-900/40 shadow-xl">
            <ShoppingCart className="w-16 h-16 mx-auto text-indigo-500/30 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-200 mb-2">
              Aapka Cart Khali Hai
            </h3>
            <p className="text-indigo-400/70 text-sm mb-6">
              Naye products add karne ke liye store browse karein.
            </p>
            <Link
              to="/"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold transition inline-block"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          /* Cart Content Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-indigo-950/30 border border-indigo-900/50 rounded-2xl backdrop-blur-md shadow-lg hover:border-indigo-700/50 transition duration-300"
                >
                  {/* Product Details */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover border border-indigo-800/40 shadow-md"
                    />
                    <div>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-semibold border border-indigo-500/30">
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-indigo-100 text-lg mt-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-indigo-400/80">
                        Badge:{" "}
                        <span className="text-indigo-300">{item.badge}</span>
                      </p>
                      <p className="text-base font-bold text-indigo-300 mt-1">
                        ${Number(item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-3 text-rose-400 hover:text-rose-200 hover:bg-rose-950/50 rounded-xl transition border border-transparent hover:border-rose-900/50 cursor-pointer"
                    title="Remove Item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="bg-indigo-950/40 border border-indigo-800/50 backdrop-blur-md p-6 rounded-2xl h-fit space-y-5 shadow-2xl">
              <h3 className="text-xl font-bold border-b border-indigo-900/60 pb-3 text-indigo-100">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-indigo-300">
                  <span>Subtotal</span>
                  <span className="font-semibold text-indigo-100">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-indigo-300">
                  <span>Shipping Fee</span>
                  <span className="text-emerald-400 font-semibold">Free</span>
                </div>
              </div>

              <div className="border-t border-indigo-900/60 pt-4 flex justify-between font-bold text-indigo-100 text-lg">
                <span>Total Amount</span>
                <span className="text-indigo-300">${subtotal.toFixed(2)}</span>
              </div>

              <button className="w-full py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl font-semibold text-center transition duration-300 shadow-lg border border-indigo-400/30 cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
