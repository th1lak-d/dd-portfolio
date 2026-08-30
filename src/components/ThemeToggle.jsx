export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="fixed top-5 right-5 z-50 flex items-center gap-2 px-3 py-2 font-mono text-xs
        border border-line dark:border-line-d rounded-full
        bg-paper/80 dark:bg-panel-d/80 backdrop-blur
        text-ink dark:text-ink-d
        hover:border-accent dark:hover:border-active transition-colors"
    >
      <span
        className={`relative flex h-2 w-2 rounded-full ${
          dark ? "bg-active" : "bg-accent"
        }`}
      />
      {dark ? "light" : "dark"}
    </button>
  );
}
