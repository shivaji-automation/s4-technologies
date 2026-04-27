import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 🌌 Subtle Grid
function FloatingGrid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[60, 60, 40, 40]} />
      <meshBasicMaterial
        wireframe
        color="#1e3a8a"
        opacity={0.15}
        transparent
      />
    </mesh>
  );
}

// 🌌 Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <Stars radius={100} depth={60} count={4000} factor={4} fade />
      <FloatingGrid />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </>
  );
}

export default function Home() {
  const navigate = useNavigate(); // ✅ navigation hook

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* 🌌 Background */}
      <Canvas className="absolute w-full h-full">
        <Scene />
      </Canvas>

      {/* ✨ Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-transparent blur-3xl"></div>

      {/* 🎯 Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#020617_90%)]"></div>

      {/* 🧊 Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* Logo */}
   <motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="flex justify-center mb-8"
>
  <motion.img
    src="/Brand.png"
    alt="S4 Technologies"
    className="w-28 md:w-36 lg:w-44 object-contain"
    
    // 🌊 gentle floating (premium feel)
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}

    // ✨ subtle hover polish
    whileHover={{ scale: 1.06, rotate: 2 }}
  />
</motion.div>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight"
        >
          Innovating Technology <br className="hidden md:block" />
          for the Future
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
        >
          AI-powered systems, immersive experiences, and refined digital innovation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >

          {/* Get Started → Services */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/services")}
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Get Started
          </motion.button>

          {/* Learn More → About */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/about")}
            className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Learn More
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}