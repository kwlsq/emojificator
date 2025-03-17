"use client";

import { getExpressionEmojis } from "@/services/emojiService";
import { EmojiList } from "@/type/emoji";
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
//   randomEmoji: EmojiList | undefined;
  setAllEmoji: () => void;
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
  const [allEmoji, setAllEmoji] = useState<EmojiList | undefined>();
//   const [randomEmoji, setRandomEmoji] = useState<EmojiList | undefined>();

  const updateAllEmoji = async (): Promise<void> => {
    const emojis = await getExpressionEmojis();
    setAllEmoji(emojis);
  };

//   const generateRandomEmojis = () => {
    
//   };

  useEffect(() => {
    updateAllEmoji();
  }, []);

  return (
    <EmojiContext.Provider
      value={{ allEmoji, setAllEmoji: updateAllEmoji }}
    >
      {children}
    </EmojiContext.Provider>
  );
};
