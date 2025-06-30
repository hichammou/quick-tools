"use client";

import { useState } from "react";
import CopyButton from "../copy-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useJsonFormatter } from "./context";

function FormattedJsonOutput() {
  const [isDark, setIsDark] = useState(true);
  const { output } = useJsonFormatter();
  return (
    output && (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Formatted JSON</CardTitle>
          <div className="flex gap-2 items-center">
            <CopyButton className="static size-9" text={output} />
            <Button
              size="sm"
              variant="outline"
              className="size-9"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <SyntaxHighlighter
              language="json"
              style={isDark ? atomDark : oneLight}
              customStyle={{
                borderRadius: "8px",
                fontWeight: 300,
                fontSize: "0.875rem",
                lineHeight: "1.5",
              }}
            >
              {output}
            </SyntaxHighlighter>
          </div>
        </CardContent>
      </Card>
    )
  );
}

export default FormattedJsonOutput;
