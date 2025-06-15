// Simple test to verify CSS classes and context are working
// This creates a minimal test component to debug the highlighting

import { useHighlightSettings } from "@/lib/highlight-context";

export default function HighlightTest() {
  const {
    tabHighlightEnabled,
    parteHighlightEnabled,
    bracketHighlightEnabled,
    mounted,
  } = useHighlightSettings();

  const testLines = [
    { content: "[Primera Parte]", type: "bracket" },
    { content: "Parte 1 de 4", type: "parte" },
    { content: "E|-----------------------------------------|", type: "tab" },
    { content: "B|-1---1---1---1----1---1---1---1----------|", type: "tab" },
    { content: "Normal line", type: "normal" },
  ];

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-bold">Highlight Test</h2>
      <div className="space-y-1">
        <p>Mounted: {mounted ? "Yes" : "No"}</p>
        <p>Tab Highlight: {tabHighlightEnabled ? "ON" : "OFF"}</p>
        <p>Parte Highlight: {parteHighlightEnabled ? "ON" : "OFF"}</p>
        <p>Bracket Highlight: {bracketHighlightEnabled ? "ON" : "OFF"}</p>
      </div>

      <div className="font-mono text-sm space-y-1">
        {testLines.map((line, index) => {
          let className = "";

          if (line.type === "bracket" && bracketHighlightEnabled) {
            className =
              "bg-green-200 border-l-4 border-green-500 px-2 py-0.5 font-medium";
          } else if (line.type === "parte" && parteHighlightEnabled) {
            className =
              "bg-blue-200 border-l-4 border-blue-500 px-2 py-0.5 font-semibold";
          } else if (line.type === "tab" && tabHighlightEnabled) {
            className = "bg-red-200 border-l-4 border-red-500 px-2 py-0.5";
          }

          return (
            <div key={index} className={className}>
              {line.content} ({line.type})
            </div>
          );
        })}
      </div>

      {/* Always visible test classes */}
      <div className="mt-4 space-y-1">
        <div className="bg-red-200 border-l-4 border-red-500 px-2 py-0.5">
          Test: Red highlighting (should always be visible)
        </div>
        <div className="bg-blue-200 border-l-4 border-blue-500 px-2 py-0.5">
          Test: Blue highlighting (should always be visible)
        </div>
        <div className="bg-green-200 border-l-4 border-green-500 px-2 py-0.5">
          Test: Green highlighting (should always be visible)
        </div>
      </div>
    </div>
  );
}
