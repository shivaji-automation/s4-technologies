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
    <section className="section text-white">
      <div className="max-w-xl mx-auto">

        <h2 className="text-4xl font-bold gradient-text mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="input"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="input"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-center mt-2 text-sm text-gray-300">
              {status}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

