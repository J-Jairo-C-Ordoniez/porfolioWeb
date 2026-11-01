"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function BugCodeBlock({ filename, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="my-2 w-full border-l-2 border-primary/20 pl-6 md:pl-8">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs tracking-widest text-primary/40 uppercase">
          {filename}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-xs text-primary/40 transition-colors hover:text-primary cursor-pointer"
          aria-label="Copiar código"
        >
          {copied ? (
            <>
              <Check size={12} />
              <span>Copiado</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-primary/60 md:text-base selection:bg-primary selection:text-background">
        <code>{code}</code>
      </pre>
    </div>
  );
}
