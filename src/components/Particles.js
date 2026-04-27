import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Particles() {
  const ref = useRef();
  const count = 600;

  // ✅ stable positions
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  // ⚡ faster smooth animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!ref.current) return;

    const pos = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // 🔥 vertical motion (faster)
      pos[i * 3 + 1] += Math.sin(t * 1.2 + i) * 0.0015;

      // 🔥 horizontal drift
      pos[i * 3] += Math.cos(t * 0.8 + i) * 0.0008;

      // ✨ depth motion (adds richness)
      pos[i * 3 + 2] += Math.sin(t * 0.8 + i) * 0.0005;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        size={0.06}
        color="#e2e8f0"
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticlesBg() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <Particles />
    </Canvas>
  );
}