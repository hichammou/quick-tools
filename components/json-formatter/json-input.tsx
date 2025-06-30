"use client";

import { Textarea } from "../ui/textarea";
import { useJsonFormatter } from "./context";

function JsonInput() {
  const { input, setInput } = useJsonFormatter();
  return (
    <Textarea
      placeholder="Paste your JSON here..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      rows={8}
      className="font-mono text-sm"
    />
  );
}

export default JsonInput;
