import Reveal from "./Reveal.jsx";

const channels = [
  {
    label: "GitHub",
    value: "github.com/th1lak-d",
    href: "https://github.com/th1lak-d",
    live: true,
  },
  {
    label: "Email",
    value: "adding soon",
    href: null,
    live: false,
  },
  {
    label: "LinkedIn",
    value: "adding soon",
    href: null,
    live: false,
  },
];

export default function Contact() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink tracking-tight mb-10">
            Get in touch
          </h2>
        </Reveal>

        <Reveal className="border border-line rounded-lg divide-y divide-line overflow-hidden">
          {channels.map((c) => {
            const Row = c.live ? "a" : "div";
            return (
              <Row
                key={c.label}
                {...(c.live
                  ? { href: c.href, target: "_blank", rel: "noreferrer" }
                  : {})}
                className={`flex items-center justify-between px-5 py-4 font-mono text-sm ${
                  c.live
                    ? "hover:bg-panel/60 transition-colors"
                    : "opacity-60"
                }`}
              >
                <span className="text-muted tracking-widest uppercase text-xs">
                  {c.label}
                </span>
                <span className="text-ink flex items-center gap-2">
                  {c.value}
                  {c.live && <span className="text-accent">↗</span>}
                </span>
              </Row>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
