export interface Emoji {
    name: string;
    category: string;
    group: string;
    htmlCode: string[];
    unicode: string[];
}

export type EmojiList = Emoji[];