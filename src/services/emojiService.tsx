import { EmojiList } from "@/type/emoji";

export const getExpressionEmojis = async (): Promise<EmojiList> => {
  try {
    const res = await fetch(
      "https://emojihub.yurace.pro/api/all/category/smileys-and-people"
    );
    return res.json();
  } catch (error) {
    console.error(
      `Error fetching emoji from category smileys and people:`,
      error
    );
    throw error;
  }
};
