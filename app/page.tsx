export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          AI Independence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Benchmark Local AI Models<br />
          <span className="text-[#58a6ff]">for Your Exact Use Case</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your test datasets, select models to compare, and get detailed performance reports — speed, accuracy, and resource usage — all on your own hardware.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Benchmarking — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No cloud dependency. Runs on your infrastructure.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["Upload Datasets", "CSV, JSONL, or plain text test sets"],
            ["Select Models", "Llama, Mistral, Phi, Gemma & more"],
            ["Get Reports", "Latency, throughput, accuracy scores"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold mb-1 text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited benchmark runs",
              "Compare up to 10 models at once",
              "Custom dataset uploads",
              "Python backend orchestration",
              "Detailed HTML & JSON reports",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which AI models are supported?",
              "Any model compatible with Ollama or llama.cpp — including Llama 3, Mistral, Phi-3, Gemma, and custom fine-tunes."
            ],
            [
              "Does my data leave my machine?",
              "Never. The Python backend runs entirely on your hardware. No data is sent to external servers."
            ],
            [
              "What hardware do I need?",
              "Any modern machine with at least 8 GB RAM. GPU acceleration is supported but optional."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Local AI Benchmark. All rights reserved.
      </footer>
    </main>
  );
}
