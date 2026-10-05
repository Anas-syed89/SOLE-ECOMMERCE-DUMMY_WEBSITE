import { Star } from "lucide-react";
import { testimonials } from "../../Data/TestimonialsData";

const Testimonials = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden text-white py-20 border-t border-slate-800/80">
      {/* Decorative Gradient Background Blur (Matching Hero Theme) */}
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block bg-indigo-500/10 text-indigo-400 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Trusted By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Athletes & Athletes
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See what our community has to say about their performance and
            comfort experience.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700/70 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-xl hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-700/50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40"
                />
                <div>
                  <h4 className="text-white font-bold text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-indigo-400 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
