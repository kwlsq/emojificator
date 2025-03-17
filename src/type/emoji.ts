export interface Emoji {
    name: string;
    category: string;
    group: string;
    htmlCode: string[];
    unicode: string[];
}

export interface EmojiList {
    emoji: Emoji[];
}