"use client";

import EmojiDisplay from "./components/EmojiDisplay";
import { useEmojiContext } from "@/context/emojiContext";

export default function Home() {
  const { allEmoji } = useEmojiContext();
  return allEmoji ? (
    <div className="max-w-md w-screen min-h-screen h-fit bg-[var(--background)] p-4 flex flex-col gap-2 max-h-screen">
      <h1 className="text-[var(--font-yellow)] drop-shadow-[1px_1px_0_black] text-xl">
        emojificator
      </h1>
      <main className="flex flex-col bg-[var(--yellow)] items-center justify-center h-screen gap-20">
        <h2 className="text-[2.5em] font-bold  text-center">
          What&apos;s your <br />
          <span className="text-[var(--dark-blue)]">emoji</span> today?
        </h2>
        <EmojiDisplay />
      </main>
    </div>
  ) : (
    <div className="text-lg font-semibold animate-pulse">Loading...</div>
  );
}
