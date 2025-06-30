"use client";

import { Textarea } from "../ui/textarea";
import { useQrCode } from "./context";

function QrCodeInput() {
  const { text, setText } = useQrCode();

  return (
    <Textarea
      placeholder="Enter text, URL, or any data to encode..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={4}
    />
  );
}

export default QrCodeInput;
