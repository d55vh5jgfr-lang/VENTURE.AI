import Link from 'next/link';
import { Sparkles, ArrowRight, Code, MessageSquare, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white selection:bg-[#8B1538] selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-[#22222A] px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border border-[#8B1538] flex items-center justify-center rounded-lg bg-[#8B1538]/10">
            <span className="font-extrabold text-[#8B1538]">V</span>
          </div>
          <span className="font-bold text-xl tracking-wider text-white">VENTURE<span className="text-[#8B1538]">.AI</span></span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/chat" className="bg-[#8B1538] hover:bg-[#72102d] px-4 py-2 rounded-lg font-semibold transition-all">
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 border border-[#8B1538]/30 bg-[#8B1538]/10 text-[#8B1538] px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5" /> Next-Gen Artificial Intelligence
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Intelligence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1538] to-rose-400">Redefined.</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          VENTURE.AI is an advanced AI assistant engineered by <span className="text-white font-semibold">Waqas Bin Shafi</span> for rapid problem solving, clean code generation, and research tasks.
        </p>
        <Link href="/chat" className="bg-[#8B1538] hover:bg-[#72102d] text-white font-semibold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-lg shadow-[#8B1538]/20">
          Start Chatting <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#22222A] py-8 text-center text-sm text-zinc-500 mt-20">
        <p>© 2026 VENTURE.AI. Developed by <span className="text-zinc-300 font-medium">Waqas Bin Shafi</span>.</p>
      </footer>
    </div>
  );
}
