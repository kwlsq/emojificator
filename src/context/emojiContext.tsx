"use client";

import { getExpressionEmojis } from "@/services/emojiService";
import { Emoji, EmojiList } from "@/type/emoji";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface EmojiContextType {
  allEmoji: EmojiList | undefined;
  randomEmoji: Emoji[] | undefined;
  setAllEmoji: () => Promise<void>;
  generateRandomEmojis: () => void; // No longer returns emojis directly, just updates state
}

const EmojiContext = createContext<EmojiContextType | undefined>(undefined);

export const useEmojiContext = () => {
  const ctx = useContext(EmojiContext);
  if (!ctx) {
    throw new Error("Context usage out of provider");
  }
  return ctx;
};

export const EmojiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [allEmoji, setAllEmoji] = useState<EmojiList | undefined>(undefined);
  const [randomEmoji, setRandomEmoji] = useState<Emoji[] | undefined>(
    undefined
  );

  const updateAllEmoji = async (): Promise<void> => {
    const emojis: EmojiList = await getExpressionEmojis();
    setAllEmoji(emojis);
  };

  const generateRandomEmojis = () => {
    if (!allEmoji || allEmoji.length === 0) return;
    const shuffled = [...allEmoji].sort(() => Math.random() - 0.5).slice(0, 50);
    setRandomEmoji(shuffled);
  };

  useEffect(() => {
    updateAllEmoji();
  }, []);

  return (
    <EmojiContext.Provider
      value={{
        allEmoji,
        randomEmoji,
        setAllEmoji: updateAllEmoji,
        generateRandomEmojis,
      }}
    >
      {children}
    </EmojiContext.Provider>
  );
};
