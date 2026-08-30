const scenarios = [
  { label: "SSH Brute Force Attack", time: 2.7, code: "T1110" },
  { label: "Malicious File Drop (Critical)", time: 11.996, code: "T1105" },
  { label: "Webshell Deployment", time: 10.221, code: "T1505.003" },
];

const maxTime = Math.max(...scenarios.map((s) => s.time));

export default function ResponseTimeline() {
  return (
    <div className="border border-line dark:border-line-d rounded-lg bg-panel/50 dark:bg-panel-d/50 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line dark:border-line-d font-mono text-xs text-muted dark:text-muted-d">
        <span className="tracking-widest uppercase">
          detection → triage → remediation
        </span>
        <span>validated against MITRE ATT&amp;CK</span>
      </div>

      <div className="divide-y divide-line dark:divide-line-d">
        {scenarios.map((s, i) => (
          <div key={s.label} className="px-5 py-4">
            <div className="flex items-center justify-between font-mono text-xs text-muted dark:text-muted-d mb-2">
              <span>
                <span className="text-ink/60 dark:text-ink-d/60">[{s.code}]</span> {s.label}
              </span>
              <span className="text-ink dark:text-ink-d font-medium">{s.time.toFixed(3)}s</span>
            </div>
            <div className="h-2 w-full bg-line/60 dark:bg-line-d/60 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-accent"
                style={{
                  width: `${(s.time / maxTime) * 100}%`,
                  transitionDelay: `${i * 120}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-t border-line dark:border-line-d font-mono text-xs flex items-center justify-between bg-ink dark:bg-ink-d text-paper dark:text-paper-d">
        <span className="tracking-widest uppercase text-paper/70 dark:text-paper-d/70">
          avg. total response time
        </span>
        <span className="font-medium">12.489s</span>
      </div>
    </div>
  );
}
