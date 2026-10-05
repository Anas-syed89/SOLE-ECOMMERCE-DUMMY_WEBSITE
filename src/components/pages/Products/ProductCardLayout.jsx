import { Link } from "react-router";

const ProductCardLayout = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start">
      <div className="w-full bg-slate-800/60 backdrop-blur-md border border-slate-700/70 rounded-3xl p-5 text-white shadow-xl hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300 group relative">
        <div className="flex justify-between items-center mb-4 relative z-10">
          <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
          <button
            aria-label="Add to Wishlist"
            className="w-8 h-8 rounded-full bg-slate-900/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-rose-400 transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        <div className="aspect-square bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl border border-slate-700/50 p-4 flex items-center justify-center relative overflow-hidden group-hover:border-indigo-500/30 transition">
          <img
            src={product.image}
            alt="Product Shoe"
            className="w-full h-[85%] object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 cursor-zoom-in"
          />
        </div>

        <div className="mt-5 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-indigo-400 font-semibold tracking-wide uppercase">
                {product.category}
              </p>
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                {product.name}
              </h3>
            </div>
            <p className="text-lg font-extrabold text-white">
              ${product.price}
            </p>
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <Link to={`/productDetail/${product.id}`}>
            <button className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 cursor-pointer">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLayout;
