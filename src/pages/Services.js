import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaBriefcase,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode />,
      desc: "Modern, scalable, and high-performance web applications tailored to your business.",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt />,
      desc: "Cross-platform mobile apps with seamless user experience and performance.",
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud />,
      desc: "Secure, scalable cloud infrastructure and deployment solutions.",
    },
    {
      title: "AI & Machine Learning",
      icon: <FaRobot />,
      desc: "Intelligent systems powered by AI to automate and enhance decision-making.",
    },
    {
      title: "IT Consulting",
      icon: <FaBriefcase />,
      desc: "Strategic technology consulting to drive business growth and efficiency.",
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
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We deliver cutting-edge digital solutions to help businesses innovate,
          scale, and succeed in a competitive world.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="card text-center group cursor-pointer"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 text-blue-400 group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-semibold mb-4">
          Ready to transform your business?
        </h3>
        <button className="btn-primary">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}