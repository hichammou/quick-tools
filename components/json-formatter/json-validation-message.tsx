"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { useJsonFormatter } from "./context";

function JsonValidationMessage() {
  const { isValid, error } = useJsonFormatter();
  return (
    isValid !== null && (
      <div
        className={`flex items-center gap-2 p-3 rounded ${
          isValid ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
        }`}
      >
        {isValid ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <XIcon className="h-4 w-4" />
        )}
        <span className="text-sm font-medium">
          {isValid ? "Valid JSON" : "Invalid JSON"}
        </span>
        {error && <span className="text-sm">: {error}</span>}
      </div>
    )
  );
}

export default JsonValidationMessage;
