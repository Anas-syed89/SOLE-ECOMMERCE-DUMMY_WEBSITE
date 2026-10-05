import React from "react";

const Footer = () => {
  return (
    <>
      {/* ================= 4. FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <a
                href="#"
                className="text-2xl font-black tracking-widest text-white uppercase"
              >
                SOLE<span className="text-indigo-500">.</span>
              </a>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Crafting premium men's footwear built for durability, comfort,
                and effortless style. Designed in New York.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Sneakers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Formal Oxfords
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Boots
                  </a>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    Returns Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">
                Newsletter
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Subscribe for 10% off your first purchase.
              </p>
              <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
            <p>© 2026 SOLE Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-400 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-400 transition">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
