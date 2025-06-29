"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { useBase64 } from "./context";
import CopyButton from "../copy-button";

function HexOutput() {
  const { hexOutput } = useBase64();
  return (
    hexOutput && (
      <Card>
        <CardHeader>
          <CardTitle>Hex Output</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Textarea
              value={hexOutput}
              readOnly
              rows={3}
              className="font-mono text-sm"
            />
            <CopyButton text={hexOutput} />
          </div>
        </CardContent>
      </Card>
    )
  );
}

export default HexOutput;
