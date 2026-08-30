import Reveal from "./Reveal.jsx";

const groups = [
  {
    label: "SIEM / EDR",
    items: ["Wazuh", "OpenSearch", "Velociraptor"],
  },
  {
    label: "SOAR & Automation",
    items: ["Shuffle", "Python"],
  },
  {
    label: "AI & ML",
    items: ["Amazon Bedrock", "Ollama (Llama3)", "Random Cut Forest"],
  },
  {
    label: "Network Security",
    items: ["Suricata"],
  },
  {
    label: "Threat Intelligence",
    items: ["MISP", "VirusTotal"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "NGINX", "QEMU/KVM"],
  },
];

export default function Skills() {
  return (
    <section className="border-b border-line dark:border-line-d">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4 mb-12">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink dark:text-ink-d tracking-tight">
            Skills &amp; certification
          </h2>
          <div className="font-mono text-xs px-3 py-1.5 border border-active/40 text-active rounded-full bg-active/5 dark:bg-active/10">
            CompTIA CySA+ certified
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.label}>
              <div className="font-mono text-xs text-muted dark:text-muted-d tracking-widest uppercase mb-3">
                {g.label}
              </div>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-ink dark:text-ink-d text-sm border-l-2 border-line dark:border-line-d pl-3 hover:border-accent dark:hover:border-active transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
