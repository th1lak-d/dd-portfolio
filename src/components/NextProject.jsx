import Reveal from "./Reveal.jsx";

export default function NextProject() {
  return (
    <section className="border-b border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
            project — 002
          </div>

          <div className="border border-dashed border-line rounded-lg p-8 md:p-10 bg-panel/30">
            <div className="flex items-center gap-2 font-mono text-xs text-muted mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-ink/40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ink/40"></span>
              </span>
              <span className="tracking-widest uppercase">status: in progress</span>
            </div>
            <h3 className="font-display font-medium text-2xl md:text-3xl text-ink">
              Next build, in the works.
            </h3>
            <p className="mt-3 text-muted max-w-xl text-sm md:text-base leading-relaxed">
              SocCraft covers detection engineering and SOC automation. The
              next project is being built to show range beyond blue-team
              tooling — details land here once it ships.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
