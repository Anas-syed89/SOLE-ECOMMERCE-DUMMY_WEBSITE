const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col justify-between font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content Area */}
      <main className="w-full max-w-6xl mx-auto px-6 py-12 flex-1 flex items-center justify-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side: Dynamic Shoe Card */}
          <div className="relative group flex justify-center">
            <div className="w-full max-w-md bg-[#121827] border border-gray-800/80 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
              {/* Slanted Product Card Wrapper */}
              <div className="bg-gradient-to-tr from-red-600 to-rose-500 rounded-xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-out flex items-center justify-center relative shadow-xl">
                {/* 404 Overlay Text inside Shoe Box */}
                <span className="absolute top-2 right-4 text-white/20 font-black text-6xl select-none">
                  LOST
                </span>

                {/* Shoe Image Placeholder / Image */}
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                  alt="Lost Shoe"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transform -scale-x-100 rotate-12"
                />
              </div>

              {/* Floating Bottom Badge */}
              <div className="mt-4 bg-[#1a2235] border border-gray-700/50 rounded-lg p-3 flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                    Status Code
                  </p>
                  <p className="text-xs font-bold text-indigo-400">
                    404: Page Off-Track
                  </p>
                </div>
                <span className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-full font-medium">
                  Out of Stock
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: 404 Typography & Actions */}
          <div className="space-y-6 text-left">
            {/* Tag / Collection Badge */}
            <div>
              <span className="bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 text-[11px] font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase">
                SPRING / SUMMER 2026 ERROR
              </span>
            </div>

            {/* Giant 404 & Heading */}
            <div className="space-y-2">
              <h1 className="text-7xl sm:text-8xl font-black text-indigo-500 tracking-tight leading-none opacity-90">
                404
              </h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide leading-tight">
                STEPPED INTO <br />
                <span className="text-indigo-400">WRONG TERRITORY.</span>
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              Engineered with precision ergonomics, but even our premium soles
              couldn't locate this page. The link might be broken or the product
              moved[cite: 2].
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/"
                className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-sm px-7 py-3.5 rounded-lg transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 active:scale-95 inline-flex items-center gap-2"
              >
                Return to Home
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="/products"
                className="bg-[#121827] hover:bg-[#1a2235] text-gray-300 hover:text-white border border-gray-700/60 font-medium text-sm px-7 py-3.5 rounded-lg transition-all active:scale-95"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
