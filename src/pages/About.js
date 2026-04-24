import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section text-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          About S4 Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We are a forward-thinking technology company delivering innovative
          digital solutions powered by AI, cloud, and modern engineering.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-300 mb-4">
            S4 Technologies is dedicated to building scalable, intelligent,
            and high-performance digital solutions. We combine creativity with
            cutting-edge technology to help businesses grow and innovate.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-300">
            To empower businesses with next-generation technology that drives
            efficiency, innovation, and success in the digital era.
          </p>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="grid gap-6"
        >
          <div className="card">
            <h4 className="font-bold text-lg mb-2">🚀 Innovation</h4>
            <p>We embrace the latest technologies to stay ahead.</p>
          </div>

          <div className="card">
            <h4 className="font-bold text-lg mb-2">⚡ Performance</h4>
            <p>Optimized, scalable, and efficient solutions.</p>
          </div>

          <div className="card">
            <h4 className="font-bold text-lg mb-2">🤝 Trust</h4>
            <p>We build long-term relationships with our clients.</p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 text-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-400">50+</h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-400">20+</h3>
          <p className="text-gray-400">Happy Clients</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-400">5+</h3>
          <p className="text-gray-400">Years Experience</p>
        </div>
      </div>
    </section>
  );
}