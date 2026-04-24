import { motion } from "framer-motion";

export default function Portfolio() {
 const projects = [
  {
    title: "AI Analytics Platform",
    desc: "AI-powered dashboard for real-time data insights.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    title: "E-Commerce Website",
    desc: "Modern scalable online store with payment integration.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
  {
    title: "Mobile Banking App",
    desc: "Secure and fast mobile banking experience.",
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
  },
  {
    title: "Cloud Dashboard",
    desc: "Cloud infrastructure monitoring system.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
  },
  {
    title: "AI Chatbot",
    desc: "Smart conversational AI assistant.",
   img: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800",
  },
  {
    title: "Startup Landing Page",
    desc: "High-converting SaaS landing page design.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
  },
];

  return (
    <section className="section text-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Our Portfolio
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore some of our recent projects showcasing innovation, design, and performance.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >

            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Have a project in mind?
        </h3>
        <button className="btn-primary">
          Let’s Build It
        </button>
      </motion.div>
    </section>
  );
}