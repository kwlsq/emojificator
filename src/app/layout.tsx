import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { EmojiProvider } from "@/context/emojiContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emojificator",
  description: "Find your current state of mind!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <EmojiProvider>
        <body className={`${dmSans.variable} antialiased  flex justify-center`}>
          {children}
        </body>
      </EmojiProvider>
    </html>
  );
}
