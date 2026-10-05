import { useNavigate, useParams } from "react-router";
import { products } from "../../../Data/ProductsData";

const ProductDetail = () => {
  const { id } = useParams();

  // Strict equality ki jagah String convert karke compare karein
  const singleProduct = products.find((obj) => String(obj.id) === String(id));

  const cartNav = useNavigate();

  const AddToCart = () => {
    if (!singleProduct) return;

    // 1. Existing storage cart array nikalein
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // 2. Check karein (String conversion ke saath taake number vs string ka mismatch na ho)
    const isExist = existingCart.some(
      (item) => String(item.id) === String(singleProduct.id),
    );

    // 3. Agar pehle se majood nahi hai tab hi add karein
    if (!isExist) {
      const updatedCart = [...existingCart, singleProduct];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // 4. Cart page par navigate karein (Simple static path /addToCart better rehta hai)
    cartNav(`/addToCart/${singleProduct.id}`);
  };

  if (!singleProduct) {
    return (
      <div className="text-white p-10 text-center">Product not found!</div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen text-white relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
          <a href="#" className="hover:text-indigo-400 transition">
            Home
          </a>
          <span>/</span>
          <a href="#" className="hover:text-indigo-400 transition">
            {singleProduct.badge}
          </a>
          <span>/</span>
          <span className="text-slate-200 font-medium">
            {singleProduct.name}
          </span>
        </nav>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Product Images */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-square w-full bg-gradient-to-br from-indigo-500/10 via-slate-800/50 to-slate-900 rounded-3xl border border-slate-800 p-8 flex items-center justify-center relative overflow-hidden group">
              {/* Badge */}
              <span className="absolute top-6 left-6 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg">
                {singleProduct.badge}
              </span>

              {/* Discount Tag */}
              <span className="absolute top-6 right-6 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-3 py-1 rounded-full">
                14% OFF
              </span>

              {/* Main Product Image */}
              <img
                src={singleProduct.image}
                alt={singleProduct.name}
                className="w-full h-[85%] object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500 mt-3 cursor-zoom-in"
              />
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="w-full lg:col-span-5 space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-0">
            {/* Category & Title */}
            <div>
              <span className="inline-block bg-indigo-500/10 text-indigo-400 font-semibold text-xs tracking-widest uppercase px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-indigo-500/20 mb-2 sm:mb-3">
                {singleProduct.category}
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-snug sm:leading-tight">
                {singleProduct.name}
              </h1>
            </div>

            {/* Rating & Reviews */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
              <div className="flex items-center text-amber-400">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-white font-bold">
                  {singleProduct.rating}
                </span>
              </div>
              <span className="text-slate-600">•</span>
              <a
                href="#reviews"
                className="text-xs sm:text-sm text-indigo-400 hover:underline"
              >
                {singleProduct.reviewsCount} reviews
              </a>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                ${Number(singleProduct.price).toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed font-normal text-sm sm:text-base">
              {singleProduct.description}
            </p>

            {/* CTA Buttons */}
            <div className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-4">
              <button
                onClick={AddToCart}
                className="w-full py-3.5 sm:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition text-center flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
