import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_6pg65yf",     // 🔁 replace
        "template_9shnpt9",    // 🔁 replace
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,  
          message: form.message,
        },
        "fFMlqFoy8ISfOFAk-"      // 🔁 replace
      );

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Failed to send message. Try again.");
    }

    setLoading(false);
  };

return (
  <section className="min-h-screen flex items-center justify-center bg-[#020617] px-6">

    <div className="w-full max-w-xl">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-10">
        <span className="gradient-text">Contact Us</span>
      </h2>

      {/* Glass Card */}
      <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium hover:scale-[1.03] active:scale-95 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status && (
            <p className="text-center text-sm text-gray-300 mt-2">
              {status}
            </p>
          )}

        </form>
      </div>
    </div>
  </section>
);
}

