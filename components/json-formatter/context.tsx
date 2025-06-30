"use client";

import { createContext, useContext, useState } from "react";

type JsonFormatterContextType = {
  input: string;
  output: string;
  isValid: boolean | null;
  error: string;
  setInput: (s: string) => void;
  format: () => void;
  minify: () => void;
  clear: () => void;
};

const JsonContext = createContext<JsonFormatterContextType>({
  input: "",
  output: "",
  isValid: null,
  error: "",
  setInput: () => {},
  format: () => {},
  minify: () => {},
  clear: () => {},
});

function JsonFormatterProvider({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState("");

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setIsValid(true);
      setError("");
    } catch (err) {
      setIsValid(false);
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setOutput("");
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setIsValid(true);
      setError("");
    } catch (err) {
      setIsValid(false);
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setOutput("");
    }
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setIsValid(null);
    setError("");
  };
  return (
    <JsonContext.Provider
      value={{
        input,
        output,
        error,
        isValid,
        setInput,
        format,
        minify,
        clear,
      }}
    >
      {children}
    </JsonContext.Provider>
  );
}

export default JsonFormatterProvider;

export const useJsonFormatter = () => {
  const context = useContext(JsonContext);
  if (!context) {
    throw new Error(
      "useJsonFormatter must be used within an JsonFormatterProvider"
    );
  }
  return context;
};
