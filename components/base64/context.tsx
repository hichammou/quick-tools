"use client";

import { createContext, useContext, useState } from "react";

type ContextType = {
  input: string;
  setInput: (input: string) => void;
  base64Output: string;
  hexOutput: string;
  mode: "encode" | "decode";
  setMode: (mode: "encode" | "decode") => void;
  encode: () => void;
  decode: () => void;
};

const Base64Context = createContext<ContextType>({
  input: "",
  setInput: () => {},
  base64Output: "",
  hexOutput: "",
  mode: "encode",
  setMode: () => {},
  encode: () => {},
  decode: () => {},
});

function Base64Provider({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const [base64Output, setBase64Output] = useState("");
  const [hexOutput, setHexOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const encode = () => {
    try {
      const encoded = btoa(input);
      setBase64Output(encoded);

      // Convert to hex
      const hex = Array.from(input)
        .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
        .join(" ");
      setHexOutput(hex.toUpperCase());
    } catch {
      setBase64Output("Error: Invalid input for encoding");
      setHexOutput("");
    }
  };

  const decode = () => {
    try {
      const decoded = atob(input);
      setBase64Output(decoded);

      // Convert to hex
      const hex = Array.from(decoded)
        .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
        .join(" ");
      setHexOutput(hex.toUpperCase());
    } catch {
      setBase64Output("Error: Invalid Base64 input");
      setHexOutput("");
    }
  };

  return (
    <Base64Context.Provider
      value={{
        input,
        base64Output,
        hexOutput,
        mode,
        setInput,
        setMode,
        encode,
        decode,
      }}
    >
      {children}
    </Base64Context.Provider>
  );
}

export const useBase64 = () => {
  const context = useContext(Base64Context);
  if (!context) {
    throw new Error("useBase64 must be used within a Base64Provider");
  }
  return context;
};

export default Base64Provider;
