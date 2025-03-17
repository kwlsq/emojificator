"use client";

import { useState } from "react";
import { useEmojiContext } from "@/context/emojiContext";
import { motion, AnimatePresence } from "framer-motion";

const EmojiDisplay = () => {
  const { randomEmoji, generateRandomEmojis } = useEmojiContext();
  const [isShuffling, setIsShuffling] = useState(false);
  console.log(randomEmoji);

  const decodeEmoji = (htmlCode: string) => {
    const codePoint = parseInt(htmlCode.replace("&#", "").replace(";", ""), 10);
    return String.fromCodePoint(codePoint);
  };

  const handleShuffle = () => {
    if (isShuffling) return;

    setIsShuffling(true);
    let shuffleCount = 0;
    let delay = 50;

    const shuffleLoop = () => {
      if (shuffleCount < 50) {
        generateRandomEmojis();
        shuffleCount++;
        delay += 5;
        setTimeout(shuffleLoop, delay);
      } else {
        setIsShuffling(false);
      }
    };

    shuffleLoop();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className={`italic text-xl text-[var(--slate)] hover:cursor-pointer ${
          isShuffling ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleShuffle}
        disabled={isShuffling}
      >
        {isShuffling ? "Shuffling..." : "Click it!"}
      </button>

      <AnimatePresence mode="wait">
        {randomEmoji && randomEmoji.length > 0 && (
          <motion.div
            key={randomEmoji[0].unicode[0]}
            className="text-9xl hover:cursor-pointer"
            animate={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {decodeEmoji(randomEmoji[0].htmlCode[0])}
          </motion.div>
        )}
      </AnimatePresence>

      {!isShuffling && randomEmoji ? (
        <h3 className="text-sm italic text-[var(--slate)] max-w-56 text-center">
          No matter what your emoji is, <br />
          don&apos;t forget to smile!
          <br />
          Pahamm!!!??!
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default EmojiDisplay;
