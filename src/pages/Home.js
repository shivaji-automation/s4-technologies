import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Particles from "../components/Particles";


export default function Home() {
  const navigate = useNavigate();

  // 🎬 Intro control
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  // 🎯 Parallax
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 120]);
  const yContent = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">

      {/* 🌌 Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] z-0"
      />

      {/* ✨ Particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10"
      >
        <Particles />
      </motion.div>

      {/* 🎯 Overlay */}
      <div className="absolute inset-0 bg-black/10 z-20" />

      {/* 🎬 INTRO LOGO (SAFE ON ALL SCREENS) */}
      <motion.div className="absolute inset-0 flex items-center justify-center z-[999] pointer-events-none">
        <motion.img
          src="/Brand.png"
          alt="logo"
          initial={{ scale: 3, y: 0, opacity: 1 }}
          animate={{
            scale: showIntro ? 3 : 1,
            y: showIntro ? 0 : -120,
            opacity: showIntro ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="
            w-auto
            h-[35vh] sm:h-[40vh] md:h-[45vh]
            max-h-[320px] md:max-h-[420px]
            object-contain
          "
        />
      </motion.div>

      {/* 🧊 MAIN CONTENT */}
      <motion.div
        style={{ y: yContent }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-3xl"
      >

        {/* 🖼 HERO LOGO */}
        {!showIntro && (
          <motion.img
            src="/Brand.png"
            alt="logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="
              h-[10vh] sm:h-[12vh] md:h-[14vh]
              max-h-[160px]
              mb-6 sm:mb-8
              object-contain
              opacity-95
            "
          />
        )}

        {/* 🧠 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 40 : 0 }}
          transition={{ duration: 1.1 }}
          className="
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            font-semibold tracking-tight text-white
            leading-snug md:leading-tight
            mb-4 sm:mb-5
          "
        >
          Innovating Technology <br className="hidden sm:block" />
          for the Future
        </motion.h1>

        {/* ✨ Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ delay: 0.4 }}
          className="
            text-gray-400
            text-sm sm:text-base md:text-lg
            max-w-md md:max-w-xl
            mb-6 sm:mb-8
            leading-relaxed
          "
        >
          AI-powered systems, immersive experiences, and refined digital innovation.
        </motion.p>

        {/* 🚀 Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/services")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition text-sm sm:text-base"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/about")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-white/20 text-white hover:bg-white/10 transition text-sm sm:text-base"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* 🌐 Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-5 mt-6 sm:mt-8"
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </motion.div>

      </motion.div>

     

    </section>
  );
}