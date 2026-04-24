import { useEffect, useState } from "react";

export default function AnimatedText() {
  const text = "S4 Technologies & Services";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-xl md:text-6xl font-bold gradient-text glow-text">
      {display}
    </h1>
  );
}