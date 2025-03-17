const EmojiDisplay = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="italic text-xl text-[var(--slate)] hover:cursor-pointer">
        Click it!
      </button>
      <div
        className="text-9xl hover:cursor-pointer"
        dangerouslySetInnerHTML={{ __html: "&#128512;" }}
      />
    </div>
  );
};

export default EmojiDisplay;
