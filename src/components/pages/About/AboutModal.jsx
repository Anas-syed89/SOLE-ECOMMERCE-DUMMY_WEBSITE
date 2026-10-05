import { useNavigate } from "react-router";

const AboutModal = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 duration-300 ${
          modal
            ? "backdrop-blur-sm opacity-100"
            : "opacity-0 pointer-events-none top-[-1350px]"
        }`}
      >
        {/* Modal Container */}
        <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
          {/* Close Button (Top Right) */}
          <button
            onClick={() => setModal(false)}
            type="button"
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Header Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#6338f6]/20 border border-[#6338f6]/30 flex items-center justify-center text-[#6338f6] mb-5">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">
              Step Into Something Better
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We create premium footwear that combines modern design, everyday
              comfort, and reliable quality. Explore our collection and find the
              perfect pair for every step of your journey.
            </p>
          </div>

          {/* Highlight Features List */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#6338f6]"></span>
              Premium Materials & Quality Craftsmanship
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#6338f6]"></span>
              Modern Styles for Every Occasion
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-[#6338f6]"></span>
              Comfortable Designs Made for Everyday Wear
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleClick}
              type="button"
              className="w-full sm:w-auto flex-1 py-3 px-6 bg-[#6338f6] cursor-pointer text-white font-bold rounded-xl shadow-lg shadow-[#6338f6]/60 transition-all duration-300 transform active:scale-95"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
