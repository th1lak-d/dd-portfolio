import Reveal from "./Reveal.jsx";
import ResponseTimeline from "./ResponseTimeline.jsx";

const stack = [
  "Wazuh",
  "OpenSearch",
  "Velociraptor",
  "Shuffle",
  "Suricata",
  "MISP",
  "VirusTotal",
  "Amazon Bedrock",
  "Ollama (Llama3)",
  "Random Cut Forest",
  "Docker",
  "NGINX",
  "QEMU/KVM",
];

const features = [
  {
    title: "End-to-end automation",
    body: "Fully automated pipeline from initial file detection to final remediation in under 15 seconds.",
  },
  {
    title: "AI-gated, risk-based response",
    body: "Autonomously executes proportionate actions — monitor, quarantine, or delete — based on AI-determined risk level.",
  },
  {
    title: "Resilient hash-based detection",
    body: "Relies on immutable file hashes, effective against evasion techniques like renaming malware.",
  },
  {
    title: "Hybrid AI model",
    body: "Local LLM for privacy-sensitive analysis, cloud AI for advanced risk assessment.",
  },
];

export default function FeaturedProject() {
  return (
    <section id="soccraft" className="border-b border-line dark:border-line-d">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <Reveal>
          <div className="font-mono text-xs text-muted dark:text-muted-d tracking-widest uppercase mb-3">
            featured project — 001
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-ink dark:text-ink-d tracking-tight">
            SocCraft
          </h2>
          <p className="mt-4 text-muted dark:text-muted-d max-w-2xl text-base md:text-lg leading-relaxed">
            An AI-enhanced, open-source SOC framework with SOAR capabilities,
            built to cut incident response time by over 98% compared to
            manual processes.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="font-mono text-xs text-muted dark:text-muted-d tracking-widest uppercase mb-3">
            demo
          </div>
          <div className="border border-line dark:border-line-d rounded-lg overflow-hidden bg-panel/30 dark:bg-panel-d/30">
            <img
              src="https://github.com/th1lak-d/SocCraft/raw/main/assets/github1.gif"
              alt="SocCraft demo — automated detection and response pipeline"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="mt-12 grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-line dark:border-line-d rounded-lg p-5 bg-panel/40 dark:bg-panel-d/40"
            >
              <h3 className="font-display font-medium text-ink dark:text-ink-d text-lg">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted dark:text-muted-d leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <div className="font-mono text-xs text-muted dark:text-muted-d tracking-widest uppercase mb-3">
            performance — validated results
          </div>
          <ResponseTimeline />
        </Reveal>

        <Reveal className="mt-12">
          <div className="font-mono text-xs text-muted dark:text-muted-d tracking-widest uppercase mb-3">
            stack
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 border border-line dark:border-line-d rounded-full text-ink/80 dark:text-ink-d/80 bg-paper dark:bg-paper-d"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap gap-4">
          
            href="https://github.com/th1lak-d/SocCraft"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-ink dark:bg-ink-d text-paper dark:text-paper-d text-sm font-medium rounded-md hover:bg-accent dark:hover:bg-active transition-colors"
          >
            View repository ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
