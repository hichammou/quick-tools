"use client";

import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { useBase64 } from "./context";

function Base64Input() {
  const { input, setInput, mode, setMode, encode, decode } = useBase64();
  return (
    <Tabs
      value={mode}
      onValueChange={(value) => setMode(value as "encode" | "decode")}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="encode">Encode</TabsTrigger>
        <TabsTrigger value="decode">Decode</TabsTrigger>
      </TabsList>
      <TabsContent value="encode" className="space-y-4">
        <Textarea
          placeholder="Enter text to encode..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
        />
        <Button onClick={encode} className="w-full">
          Encode to Base64
        </Button>
      </TabsContent>
      <TabsContent value="decode" className="space-y-4">
        <Textarea
          placeholder="Enter Base64 to decode..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
        />
        <Button onClick={decode} className="w-full">
          Decode from Base64
        </Button>
      </TabsContent>
    </Tabs>
  );
}

export default Base64Input;
