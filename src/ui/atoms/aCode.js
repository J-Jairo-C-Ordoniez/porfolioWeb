import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function ACode({ code, language }) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          width: "100%",
          maxWidth: "100%",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
        className="text-sm md:text-base"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}



