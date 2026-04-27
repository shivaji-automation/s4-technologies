import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
  const text = "S4 Technologies & Services";
  const [display, setDisplay] = useState("");
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(interval);

        // ⏱ show logo after typing finishes
        setTimeout(() => setShowLogo(true), 200);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 text-center">

      {/* 🧠 Text */}
      <h1 className="text-2xl md:text-5xl font-semibold tracking-tight text-white/90">
        {display}
      </h1>

      {/* 🖼 Logo appears AFTER typing */}
      {showLogo && (
        <motion.img
          src="/Brand.png"
          alt="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
           className="w-14 md:w-20 opacity-90"
        />
      )}

    </div>
  );
}