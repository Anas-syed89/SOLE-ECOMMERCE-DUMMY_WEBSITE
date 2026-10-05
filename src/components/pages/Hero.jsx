import { useNavigate } from "react-router";

const Hero = () => {
  // For Explore button
  const expNavigate = useNavigate();
  const exploreProducts = () => {
    expNavigate("/products");
  };
  // For Explore button
  const videoNavigate = useNavigate();
  const watchVideo = () => {
    videoNavigate("/watchDemo");
  };

  return (
    <>
      {/* ================= 2. HERO SECTION ================= */}
      <section className="relative bg-slate-900 overflow-hidden text-white min-h-[85vh] flex items-center">
        {/* Decorative Gradient Background Blur */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
              <span className="inline-block bg-indigo-500/10 text-indigo-400 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-indigo-500/20">
                Spring / Summer 2026 Collection
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase">
                Step Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  Superior Comfort.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Engineered with precision ergonomics and premium Italian
                leather. Designed for performance, styled for the modern
                gentleman.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={exploreProducts}
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition text-center cursor-pointer"
                >
                  Explore Collection
                </button>

                <button
                  onClick={watchVideo}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition text-center cursor-pointer"
                >
                  Watch Promo
                </button>
              </div>
            </div>
            {/* Featured Shoe Hero Visual */}
            <div className="lg:col-span-6 relative flex justify-center items-center z-10">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-transparent rounded-3xl border border-slate-800 p-8 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
                    alt="Men's Red Running Shoe"
                    className="w-full object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-zoom-in"
                  />
                </div>
                {/* Floating Spec Card */}
                <div className="absolute bottom-4 left-4 sm:-bottom-4 sm:-left-4 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl hidden sm:block">
                  <p className="text-xs text-slate-400">Featured Product</p>
                  <p className="text-sm font-bold text-white">
                    Air Apex Runner
                  </p>
                  <p className="text-indigo-400 font-extrabold text-sm mt-0.5">
                    $189.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
