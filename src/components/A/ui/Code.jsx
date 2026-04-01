import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function ACode({ code, language }) {
  return (
    <div className="overflow-x-auto rounded-none border border-white/5 bg-black/20">
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          background: "transparent",
          width: "100%",
          maxWidth: "100%",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
        className="text-xs md:text-sm font-mono tracking-tight"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
