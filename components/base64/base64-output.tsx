"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { useBase64 } from "./context";
import CopyButton from "../copy-button";

function Base64Output() {
  const { base64Output } = useBase64();
  return (
    base64Output && (
      <Card>
        <CardHeader>
          <CardTitle>Base64 Output</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Textarea
              value={base64Output}
              readOnly
              rows={4}
              className="font-mono text-sm"
            />
            <CopyButton text={base64Output} />
          </div>
        </CardContent>
      </Card>
    )
  );
}

export default Base64Output;
