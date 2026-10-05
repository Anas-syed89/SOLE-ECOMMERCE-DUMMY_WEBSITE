import { useState } from "react";
import { Flip, toast } from "react-toastify";

const Contact = () => {
  const [user, setUser] = useState({
    uname: "",
    email: "",
    subject: "",
    message: "",
  });

  const formHandle = (e) => {
    e.preventDefault();

    if (
      !user.uname.trim() ||
      !user.email.trim() ||
      !user.subject.trim() ||
      !user.message.trim()
    ) {
      toast.error("Please fill in all fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });

      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
    setUser({
      uname: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="text-[#6338f6]">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Have a question about sizing, order status, or finding the perfect
            fit? Fill out the form below and our footwear team will assist you
            shortly.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={formHandle} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Full Name
              </label>
              <input
                onChange={handleSubmit}
                type="text"
                name="uname"
                value={user.uname}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email Address
              </label>
              <input
                onChange={handleSubmit}
                type="email"
                name="email"
                value={user.email}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Subject
            </label>
            <input
              onChange={handleSubmit}
              type="text"
              name="subject"
              value={user.subject}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Message
            </label>
            <textarea
              onChange={handleSubmit}
              name="message"
              value={user.message}
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#6338f6] cursor-pointer text-white font-bold rounded-xl shadow-lg shadow-[#6338f6]/60 transition-all duration-300 transform active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
