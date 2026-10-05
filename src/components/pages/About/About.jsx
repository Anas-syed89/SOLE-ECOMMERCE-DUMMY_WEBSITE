import React, { useState } from "react";
import AboutModal from "./AboutModal";

const About = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {/* Modal Overlay / Background Backdrop */}
      <AboutModal modal={modal} setModal={setModal} />

      {/* About Section */}
      <section className="bg-slate-950 text-slate-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Top Hero / Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content with Fade/Slide In Feel */}
            <div className="space-y-6 transition-all duration-700 ease-out transform">
              <span className="text-sm font-semibold tracking-wider text-[#6338f6] uppercase inline-block animate-pulse">
                ABOUT OUR BRAND
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Step Into Style. Walk With Confidence.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                We create premium footwear designed for everyday comfort, modern
                style, and confident steps. From everyday sneakers to
                performance-ready shoes, every pair is made to elevate the way
                you move.
              </p>
              <div>
                <button
                  onClick={() => setModal(true)}
                  type="button"
                  className="py-3 px-8 bg-[#6338f6] hover:bg-[#5225ea] text-white font-bold rounded-xl shadow-lg shadow-[#6338f6]/40 hover:shadow-[#6338f6]/70 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Explore Our Story
                </button>
              </div>
            </div>

            {/* Decorative Card / Image Placeholder with Glow & Floating Animation */}
            <div className="relative group transition-transform duration-500 hover:-translate-y-2">
              {/* Animated Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6338f6] to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-[#6338f6]/20 flex items-center justify-center text-[#6338f6] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#6338f6]">
                    Premium Comfort
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Thoughtfully designed shoes that combine modern style,
                    lasting comfort, and quality craftsmanship for every step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section with Hover Zoom & Border Animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center backdrop-blur-md shadow-xl">
            <div className="p-2 transition-transform duration-300 hover:scale-105">
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white">
                50+
              </h4>
              <p className="text-slate-400 text-sm mt-1">Projects Completed</p>
            </div>
            <div className="p-2 transition-transform duration-300 hover:scale-105">
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white">
                99%
              </h4>
              <p className="text-slate-400 text-sm mt-1">Client Satisfaction</p>
            </div>
            <div className="p-2 transition-transform duration-300 hover:scale-105">
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white">
                24/7
              </h4>
              <p className="text-slate-400 text-sm mt-1">Support Available</p>
            </div>
            <div className="p-2 transition-transform duration-300 hover:scale-105">
              <h4 className="text-3xl sm:text-4xl font-extrabold text-[#6338f6]">
                5+
              </h4>
              <p className="text-slate-400 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
