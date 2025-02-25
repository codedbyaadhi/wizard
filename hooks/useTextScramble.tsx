import { useState, useEffect } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export const useTextScramble = (text: string, isScrambling: boolean) => {
  const [scrambledText, setScrambledText] = useState(text);

  useEffect(() => {
    if (!isScrambling) {
      setScrambledText(text);
      return;
    }

    let frame = 0;
    const totalFrames = 30; // Increased frames for smoother animation
    let interval: NodeJS.Timeout;

    const scramble = () => {
      frame++;

      const progress = frame / totalFrames;
      const scrambled = text
        .split("")
        .map((char, idx) => {
          if (char === " ") return " ";

          // Calculate when this character should stop scrambling
          const charProgress = (idx / text.length) * 0.5; // Spread the effect over half the duration
          if (progress > charProgress + 0.5) return char; // Show original after halfway point

          // During scramble phase
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setScrambledText(scrambled);

      if (frame < totalFrames) {
        interval = setTimeout(scramble, 20); // Faster updates for smoother animation
      }
    };

    scramble();

    return () => clearTimeout(interval);
  }, [text, isScrambling]);

  return scrambledText;
};
