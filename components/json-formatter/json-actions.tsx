"use client";

import { Button } from "../ui/button";
import { useJsonFormatter } from "./context";

function JsonActions() {
  const { input, format, minify, clear } = useJsonFormatter();
  return (
    <div className="flex gap-2">
      <Button onClick={format} disabled={!input.trim()}>
        Format & Validate
      </Button>
      <Button onClick={minify} disabled={!input.trim()} variant="outline">
        Minify
      </Button>
      <Button onClick={clear} variant="outline">
        Clear
      </Button>
    </div>
  );
}

export default JsonActions;
