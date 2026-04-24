import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

function FloatingGrid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial wireframe color="#3b82f6" />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={50} depth={50} count={2000} factor={4} />
      <FloatingGrid />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function Home() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-20"
      >
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>

      {/* 🌌 3D BACKGROUND */}
      <Canvas className="absolute w-full h-full">
        <Scene />
      </Canvas>

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold gradient-text mb-6"
        >
          Innovating Technology for the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-xl mx-auto mb-6"
        >
          AI-powered systems, immersive experiences, and next-generation digital innovation.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="btn-primary"
        >
          Get Started
        </motion.button>
      </div>
          </section>
  );
}