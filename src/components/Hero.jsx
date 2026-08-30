export default function Hero() {
  return (
    <header className="relative border-b border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* status readout eyebrow */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs text-muted section-enter">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-active opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-active"></span>
          </span>
          <span className="tracking-widest uppercase">status: operational</span>
        </div>

        <h1
          className="font-display font-semibold text-ink leading-[0.95] tracking-tight section-enter"
          style={{ fontSize: "clamp(3.5rem, 11vw, 7.5rem)", animationDelay: "80ms" }}
        >
          D<span className="text-accent">/</span>d
        </h1>

        <p
          className="mt-6 font-display text-2xl md:text-3xl text-ink/90 max-w-2xl section-enter"
          style={{ animationDelay: "160ms" }}
        >
          Defense in depth.
        </p>

        <p
          className="mt-4 text-muted max-w-xl text-base md:text-lg leading-relaxed section-enter"
          style={{ animationDelay: "220ms" }}
        >
          Cybersecurity professional focused on detection engineering, SOC
          automation, and AI-augmented incident response.
        </p>

        {/* mono readout line */}
        <div
          className="mt-10 font-mono text-xs text-muted border border-line rounded-md px-4 py-3 inline-flex flex-wrap gap-x-3 gap-y-1 bg-panel/60 section-enter"
          style={{ animationDelay: "300ms" }}
        >
          <span>CompTIA CySA+ certified</span>
          <span className="text-line">//</span>
          <span>blue team</span>
          <span className="text-line">//</span>
          <span>soc &amp; detection engineering</span>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-4 section-enter"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#soccraft"
            className="px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-md hover:bg-accent transition-colors"
          >
            View featured project
          </a>
          <a
            href="https://github.com/th1lak-d"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-line text-sm font-medium rounded-md hover:border-ink transition-colors"
          >
            GitHub profile ↗
          </a>
        </div>
      </div>
    </header>
  );
}
